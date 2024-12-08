export function calculateSolarPotential(lat, lon) {
    // Constants for solar energy calculation
    const dailySunlightHours = 5; // Average hours of direct sunlight per day
    const panelEfficiency = 0.2; // Solar panel efficiency (20%)
    const usableArea = 50; // Assume 50m² of usable space for solar panels

    // 1. Calculate daily energy (kWh) = sunlight hours × panel efficiency × usable area
    const dailyEnergy = dailySunlightHours * panelEfficiency * usableArea;

    // 2. Calculate monthly energy = daily energy * 30 (for 30 days)
    const monthlyEnergy = dailyEnergy * 30;

    // 3. Calculate cost savings ($) = monthly energy (kWh) × price per kWh (assume $0.12/kWh)
    const costSavings = monthlyEnergy * 0.12;

    return {
        kWh: monthlyEnergy.toFixed(2), // Total kWh for the month
        savings: costSavings.toFixed(2) // Cost savings for the month
    };
}

