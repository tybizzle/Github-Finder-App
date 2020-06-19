class Github {
  constructor() {
    this.client_id = '399b19ba5d52ad5b1b43';
    this.client_secret = '0dee0686f57d347349a7f3663edc5c3c0f6b57b8';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUsers(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}