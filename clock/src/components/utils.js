function format(time_in_seconds, is_ringing){
    let hours = Math.floor(time_in_seconds / 3600);
    let minutes = Math.floor((time_in_seconds - (hours * 3600)) / 60);
    let seconds = time_in_seconds - (hours * 3600) - (minutes * 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    const result = is_ringing ? `-${hours}:${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;

    return result;
}

export {format};