// pages/DashboardPage.js
const BasePage = require('./BasePage');

class DashboardPage extends BasePage {
  constructor(page) {
    super(page);

    this.profileName = '#profileName';
  }

  async getProfileName() {
    return await this.getText(this.profileName);
  }
}

module.exports = DashboardPage;