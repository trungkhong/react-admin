export function convertDatetimeScoop(currentTime, createdAt) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    let currentTimeConvert = new Date(currentTime)
    let createdAtConvert = new Date(createdAt)

    var elapsed = Math.abs(currentTimeConvert.getTime() - createdAtConvert.getTime());

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + ' days ago';
    } else {
        return new Intl.DateTimeFormat('en-GB').format(new Date(createdAt).getTime());
    }
}