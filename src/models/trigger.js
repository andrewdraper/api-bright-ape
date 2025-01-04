class TriggerModel {
  // constructor() {
  //   this.openai = new OpenAI();
  //   this.supabase = createClient(
  //     process.env.SUPABASE_URL,
  //     process.env.SUPABASE_SERVICE_KEY
  //   );
  // }

  async processWebhook(data) {
    console.log('Trigger endpoint accessed.')
    console.log(data)
    return { status: 200 }
  }
}

module.exports = TriggerModel; 