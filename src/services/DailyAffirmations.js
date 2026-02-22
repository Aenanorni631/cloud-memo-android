export const DailyAffirmations = {
    quotes: [
        "You are capable of amazing things today.",
        "Focus on the step in front of you, not the whole staircase.",
        "Embrace the pace of your own journey."
    ],
    scheduleMorningNotification: () => {
        console.log("Scheduling daily morning push notification...");
        // Logic to trigger a local notification at 8:00 AM
        return { success: true, scheduledTime: "08:00" };
    },
    getRandomQuote: function() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
    }
};
