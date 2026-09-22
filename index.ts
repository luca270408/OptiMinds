import { config as loadEnv } from 'dotenv';

loadEnv({ path: '.env.local' });
import { higgsfield, config as configureHiggsfield } from '@higgsfield/client/v2';

// HF_CREDENTIALS is loaded from .env.local (format "KEY_ID:KEY_SECRET").
// The SDK reads it automatically, but we configure explicitly for a clear failure
// message if it's missing rather than a confusing auth error from the API.
const credentials = process.env.HF_CREDENTIALS;
if (!credentials) {
  console.error('Missing HF_CREDENTIALS. Set it in .env.local as "KEY_ID:KEY_SECRET".');
  process.exit(1);
}
configureHiggsfield({ credentials });

async function main() {
  const response = await higgsfield.subscribe('bytedance/seedance-2.5/text-to-video', {
    input: {
      prompt: 'A cinematic scene at sunset',
      duration: 5,
      resolution: '720p',
      aspect_ratio: '16:9',
    },
    withPolling: true,
  });

  switch (response.status) {
    case 'completed': {
      const videoUrl = response.video?.url;
      if (!videoUrl) {
        console.error('Request completed but no video URL was returned.');
        process.exit(1);
      }
      console.log('Video generated successfully:', videoUrl);
      break;
    }
    case 'failed':
      console.error('Generation failed. Request ID:', response.request_id);
      process.exit(1);
      break;
    case 'nsfw':
      console.error('Generation was rejected by content moderation. Request ID:', response.request_id);
      process.exit(1);
      break;
    default:
      console.error(`Unexpected terminal status "${response.status}". Request ID:`, response.request_id);
      process.exit(1);
  }
}

main().catch((error) => {
  console.error('Video generation request errored:', error instanceof Error ? error.message : error);
  process.exit(1);
});
