import { config as loadEnv } from "dotenv";
import { config, higgsfield, HiggsfieldError } from "@higgsfield/client/v2";

// Server-side only: credentials ("KEY_ID:KEY_SECRET") come from .env.local.
loadEnv({ path: ".env.local" });

const MODEL = "bytedance/seedance-2.5/text-to-video";

async function main(): Promise<number> {
  const credentials = process.env.HF_CREDENTIALS;
  if (!credentials || !credentials.includes(":")) {
    console.error('HF_CREDENTIALS is missing or not in "KEY_ID:KEY_SECRET" format (set it in .env.local).');
    return 1;
  }
  config({ credentials });

  const result = await higgsfield.subscribe(MODEL, {
    input: {
      prompt: "A cinematic scene at sunset",
      duration: 5,
      resolution: "720p",
      aspect_ratio: "16:9",
    },
    withPolling: true,
  });

  switch (result.status) {
    case "completed":
      if (!result.video?.url) {
        console.error(`Request ${result.request_id} completed but returned no video URL.`);
        return 1;
      }
      console.log(`Video URL: ${result.video.url}`);
      return 0;
    case "nsfw":
      console.error(`Request ${result.request_id} was blocked by moderation (nsfw). No video generated.`);
      return 1;
    case "failed":
      console.error(`Request ${result.request_id} failed.`, (result as { error?: string }).error ?? "");
      return 1;
    default:
      console.error(`Request ${result.request_id} ended with status "${result.status}". No video generated.`);
      return 1;
  }
}

main()
  .then((code) => process.exit(code))
  .catch((err) => {
    console.error(err instanceof HiggsfieldError ? `${err.name}: ${err.message}` : err);
    process.exit(1);
  });
