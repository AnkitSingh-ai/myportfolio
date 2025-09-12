/*
  # Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Contact's full name
      - `email` (text, required) - Contact's email address  
      - `subject` (text, required) - Message subject line
      - `message` (text, required) - Full message content
      - `created_at` (timestamp) - When the submission was created
      - `read_at` (timestamp, nullable) - When the message was marked as read

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anyone to insert (public contact form)
    - Add policy for authenticated admin users to read all submissions
    - Add policy for authenticated admin users to update read status

  3. Indexes
    - Index on created_at for sorting submissions
    - Index on email for quick lookups
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read_at timestamptz DEFAULT NULL
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert contact submissions (public contact form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can read all submissions (for admin dashboard)
CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can update submissions (mark as read)
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
  ON contact_submissions(email);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_read_status
  ON contact_submissions(read_at) WHERE read_at IS NULL;