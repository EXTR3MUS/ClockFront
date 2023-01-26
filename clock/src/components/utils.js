function format(time_in_seconds){
    let hours = Math.floor(time_in_seconds / 3600);
    let minutes = Math.floor((time_in_seconds - (hours * 3600)) / 60);
    let seconds = time_in_seconds - (hours * 3600) - (minutes * 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

export {format};