import githubRelease from 'new-github-release-url';
import open from 'open';

export function openGithubRelease(version: string) {
  open(
    githubRelease({
      user: 'paulm17',
      repo: 'charizardxx',
      tag: version,
      title: version,
    })
  );
}