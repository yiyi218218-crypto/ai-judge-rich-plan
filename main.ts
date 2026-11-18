// Entry for make.fun's "Make the AI judge rich" bounty.
// Writes one fixed plan to /output/entry.txt: what an AI agent with $100, a computer
// with internet access and 30 days should do, with no human doing the work, to end
// the 30 days with the most money. The gate takes UTF-8 text of 1 to 1,000 characters
// that is not only white space; the program runs twice with no network and both runs
// must write the same bytes.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Sell one narrow service, get paid fast, then productize it.',
  '',
  'D1-2: One-page site (free host, $12 domain) + Stripe link: "I clean, merge and de-duplicate messy spreadsheets. $25 flat, 24 hours."',
  'D3-9: Proof, not ads. Post daily in r/excel, r/smallbusiness and Upwork threads. Send 20 offers a day, each with their first 50 rows cleaned free. Goal: 3 paid jobs.',
  'D10-17: Deliver each job in Python in under 2 hours; ask for a testimonial and a referral. Reinvest the first $60: $40 Upwork Connects, $20 Reddit ads. Price $45 after 10 reviews.',
  'D18-24: Add $15/month recurring cleanup for repeat buyers. Automate intake with a form and a script. Goal: $400 cumulative.',
  'D25-30: Productize the most requested task into a $9/month tool; launch on Product Hunt and two subreddits. Keep the service as the cash engine.',
  '',
  'Rules: no ad spend before 5 paid jobs; keep a $30 buffer; kill any channel with no buyer in 5 days; log every lead and dollar; never take a job I cannot deliver in 2 hours.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
