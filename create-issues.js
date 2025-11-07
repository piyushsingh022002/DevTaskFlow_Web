require('dotenv').config();
const fs = require('fs');
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const repo = process.env.GITHUB_REPO;

const md = fs.readFileSync('issues.md', 'utf-8');
const issues = md.split('---').map(block => {
  const titleMatch = block.match(/### Issue #\d+: (.+)/);
  const labelsMatch = block.match(/\*\*Labels:\*\* (.+)/);
  const descMatch = block.match(/\*\*Description:\*\*\n([\s\S]+?)\n\*\*Checklist/);
  if (titleMatch) {
    return {
      title: titleMatch[1].trim(),
      body: descMatch ? descMatch[1].trim() : '',
      labels: labelsMatch ? labelsMatch[1].split(',').map(l => l.trim()) : []
    };
  }
  return null;
}).filter(Boolean);

(async () => {
  for (const issue of issues) {
    await octokit.issues.create({
      owner: repo.split('/')[0],
      repo: repo.split('/')[1],
      title: issue.title,
      body: issue.body,
      labels: issue.labels
    });
    console.log(`Created issue: ${issue.title}`);
  }
})();
