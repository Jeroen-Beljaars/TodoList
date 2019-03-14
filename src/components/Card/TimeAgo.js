const getTimeString = (difference, timeUnit) => {
    difference = Math.round(difference);
    if (difference <= 1) return `1 ${timeUnit.slice(0, -1)}`
    else return `${difference} ${timeUnit}`
}

const TimeAgo = props => {
    const currentTime = Date.now();
    const timeDifference = (currentTime - props.startTime) / 1000; // Difference in seconds
    if (timeDifference < 60) return getTimeString(timeDifference, "seconds");
    else if (timeDifference >= 60 && timeDifference < 3600) return getTimeString(timeDifference / 60, "minutes");
    else if (timeDifference >= 3600 && timeDifference < 86400) return getTimeString(timeDifference / 3600, "hours");
    else if (timeDifference >= 86400 && timeDifference < 604800) return getTimeString(timeDifference / 86400, "days");
    else if (timeDifference >= 604800 && timeDifference < 2629743) return getTimeString(timeDifference / 604800, "weeks");
    else {
        const date = new Date(props.startTime)
        var month = date.getUTCMonth() + 1; //months from 1-12
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
        return `on ${day}-${month}-${year}`
    }

}

export default TimeAgo