class TriggerModel {
  // constructor() {
  //   this.openai = new OpenAI();
  //   this.supabase = createClient(
  //     process.env.SUPABASE_URL,
  //     process.env.SUPABASE_SERVICE_KEY
  //   );
  // }

  async processWebhook(data) {
    console.log(data)
  }
}

module.exports = TriggerModel; 