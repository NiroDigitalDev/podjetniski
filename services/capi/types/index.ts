// src/types/index.ts

// User data - Fields recommended by Meta (add more as needed)
// See: https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/user-data
export interface UserData {
  em?: string; // Email (hashed)
  ph?: string; // Phone (hashed)
  fn?: string; // First Name (hashed)
  ln?: string; // Last Name (hashed)
  ge?: string; // Gender (hashed)
  db?: string; // Date of Birth (hashed)
  ct?: string; // City (hashed)
  st?: string; // State (hashed)
  zp?: string; // Zip Code (hashed)
  country?: string; // Country (hashed)
  external_id?: string; // External ID
  client_ip_address?: string; // Must be provided if available
  client_user_agent?: string; // Must be provided if available
  fbc?: string; // Facebook Click ID
  fbp?: string; // Facebook Browser ID
  subscription_id?: string;
  fb_login_id?: string;
  lead_id?: string;
}

// See: https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/custom-data
export interface CustomData {
  value?: number;
  currency?: string; // e.g., 'USD', 'EUR'
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  contents?: Array<{ id: string; quantity: number; item_price?: number }>;
  content_type?: "product" | "product_group";
  order_id?: string;
  predicted_ltv?: number;
  num_items?: number;
  search_string?: string;
  status?: string;
  delivery_category?: "in_store" | "curbside" | "home_delivery";
  [key: string]: any; // Allow other custom fields
}

// See: https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event
export interface ServerEvent {
  event_name: string; // e.g., 'Purchase', 'Lead', 'ViewContent'
  event_time: number; // Unix timestamp
  user_data: UserData;
  custom_data?: CustomData;
  event_source_url?: string; // URL of the page where the event occurred
  opt_out?: boolean;
  event_id?: string; // Unique ID for deduplication
  action_source:
    | "website"
    | "app"
    | "offline"
    | "chat"
    | "physical_store"
    | "other"; // Typically 'website' for Next.js
  data_processing_options?: string[]; // e.g., ['LDU']
  data_processing_options_country?: number;
  data_processing_options_state?: number;
}

// The final payload structure sent to Meta
export interface MetaPayload {
  data: ServerEvent[];
  test_event_code?: string;
}
