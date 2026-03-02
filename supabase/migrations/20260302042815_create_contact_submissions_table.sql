/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact person's full name
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number (optional)
      - `company` (text) - Company name (optional)
      - `property_type` (text) - Type of property (e.g., apartment, condo, HOA)
      - `units` (integer) - Number of units in the property (optional)
      - `message` (text) - Customer's message or inquiry
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the inquiry (default: 'new')

  2. Indexes
    - Index on `created_at` for efficient date-based queries
    - Index on `email` for lookup by email
    - Index on `status` for filtering by status

  3. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert submissions (public form access)
    - Add policy for authenticated admin users to view all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  company text DEFAULT '',
  property_type text DEFAULT '',
  units integer,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create indexes for efficient queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy to allow public form submissions (anyone can insert)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for authenticated users to view all submissions (for admin panel)
CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);