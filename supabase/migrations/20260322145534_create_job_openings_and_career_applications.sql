/*
  # Create Job Openings and Career Applications Tables

  1. New Tables
    - `job_openings`
      - `id` (uuid, primary key)
      - `title` (text) - Job title
      - `department` (text) - Department name
      - `location` (text) - Work location
      - `type` (text) - Employment type (Full-Time, Part-Time, etc.)
      - `description` (text) - Full job description
      - `requirements` (text) - Job requirements
      - `benefits` (text) - Job benefits
      - `is_active` (boolean, default true) - Whether the listing is live
      - `created_at` (timestamptz) - When the listing was created

    - `career_applications`
      - `id` (uuid, primary key)
      - `job_opening_id` (uuid, nullable) - References the job applied for
      - `job_title` (text) - Snapshot of job title at time of application
      - `full_name` (text) - Applicant name
      - `email` (text) - Applicant email
      - `phone` (text) - Applicant phone
      - `message` (text) - Cover letter / message
      - `status` (text, default 'new') - Application status
      - `created_at` (timestamptz) - When the application was submitted

  2. Security
    - Enable RLS on both tables
    - `job_openings`: Public SELECT for active listings only (no auth required for reading)
    - `career_applications`: Public INSERT (anyone can apply), authenticated SELECT for admin review

  3. Indexes
    - `job_openings`: index on `is_active`, index on `created_at`
    - `career_applications`: index on `created_at`, index on `email`, index on `status`

  4. Seed Data
    - 3 initial job openings relevant to the business
*/

-- Job Openings Table
CREATE TABLE IF NOT EXISTS job_openings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  department text NOT NULL DEFAULT '',
  location text NOT NULL DEFAULT 'Central Florida',
  type text NOT NULL DEFAULT 'Full-Time',
  description text NOT NULL DEFAULT '',
  requirements text NOT NULL DEFAULT '',
  benefits text NOT NULL DEFAULT '',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_job_openings_active ON job_openings (is_active);
CREATE INDEX IF NOT EXISTS idx_job_openings_created_at ON job_openings (created_at DESC);

ALTER TABLE job_openings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active job openings"
  ON job_openings
  FOR SELECT
  USING (is_active = true);

-- Career Applications Table
CREATE TABLE IF NOT EXISTS career_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_opening_id uuid REFERENCES job_openings(id),
  job_title text NOT NULL DEFAULT '',
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_career_applications_created_at ON career_applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_career_applications_email ON career_applications (email);
CREATE INDEX IF NOT EXISTS idx_career_applications_status ON career_applications (status);

ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a career application"
  ON career_applications
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view career applications"
  ON career_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Seed initial job openings
INSERT INTO job_openings (title, department, location, type, description, requirements, benefits) VALUES
(
  'Valet Trash Collection Associate',
  'Operations',
  'Orlando & Central Florida',
  'Full-Time',
  'Join our frontline team as a Valet Trash Collection Associate. You will be responsible for door-to-door trash collection at apartment communities across Central Florida. This role is perfect for someone who enjoys working independently, staying active, and taking pride in keeping communities clean. You will work evening shifts, collecting trash from resident doorsteps and transporting it to designated disposal areas while maintaining the highest standards of professionalism and reliability.',
  'Valid driver''s license and reliable transportation. Ability to lift up to 50 lbs repeatedly. Comfortable working outdoors in all weather conditions. Strong work ethic and attention to detail. Ability to work evening hours (typically 8 PM - 12 AM). Must pass a background check. Prior experience in waste management, landscaping, or property services is a plus but not required.',
  'Competitive hourly pay with performance bonuses. Consistent weekly schedule. Opportunity for advancement to route supervisor. Company-provided uniforms and equipment. Supportive team environment. Be part of a fast-growing company.'
),
(
  'Route Supervisor',
  'Operations',
  'Orlando & Central Florida',
  'Full-Time',
  'We are looking for a Route Supervisor to oversee our valet trash collection teams across multiple properties in Central Florida. In this leadership role, you will manage collection associates, ensure service quality meets our 100% collection rate guarantee, handle photo verification reviews, and serve as a key point of contact for property managers. This is an excellent opportunity for someone ready to step into a management role within a rapidly growing company.',
  'Minimum 1 year of supervisory or team lead experience. Valid driver''s license and clean driving record. Strong organizational and communication skills. Ability to work flexible evening hours. Experience in property management, waste management, or logistics preferred. Proficiency with mobile apps and basic technology for route tracking and photo verification. Must pass a background check.',
  'Competitive salary with performance-based bonuses. Leadership development and career growth opportunities. Company vehicle provided for work use. Health benefits eligibility. Paid time off. Direct impact on company growth and customer satisfaction.'
),
(
  'Business Development Representative',
  'Sales',
  'Orlando & Central Florida',
  'Full-Time',
  'We are seeking an ambitious Business Development Representative to help expand our footprint across Central Florida. You will identify and engage apartment communities, property management companies, and HOAs that could benefit from our valet trash, junk removal, bulk removal, and pressure washing services. This role involves attending industry events, building relationships with property managers, and presenting customized service proposals. Ideal for someone who is a natural networker with a passion for sales.',
  'Minimum 1 year of B2B sales or business development experience. Excellent verbal and written communication skills. Self-motivated and comfortable with outbound prospecting. Valid driver''s license and willingness to travel within Central Florida. Familiarity with the multifamily or property management industry is a strong plus. Professional appearance and demeanor for client-facing meetings.',
  'Base salary plus uncapped commission structure. Mileage reimbursement. Flexible schedule. Opportunity to shape the growth trajectory of a fast-growing company. Attend industry trade shows and networking events. Health benefits eligibility.'
);
