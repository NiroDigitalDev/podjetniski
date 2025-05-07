// src/index.ts

// Re-export key components and types for easy consumption

// The primary way to use the library: Server Actions
export { trackMetaEvent } from "./actions/trackEvent";

// Export types for users of the library
export type { UserData, CustomData, ServerEvent } from "./types";

// Optionally export core functions if advanced usage is needed (use with caution)
// export { createEventPayload } from './core/payload';
// export { sendMetaEvent } from './core/api';
// export { hashUserData } from './core/utils';

// Configuration is handled via environment variables, but you could
// export an initialization function if more complex setup is needed.
