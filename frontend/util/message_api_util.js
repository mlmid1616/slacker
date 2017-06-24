  export const fetchSelectedMessages = (channel_id) => {
    return(
      $.ajax({
        type: "GET",
        url: "api/messages",
        data: {channel: channel_id}
      })
    );
  };

  export const createSelectedMessage = message => {
    //
    return(
      $.ajax({
        type:"POST",
        url:"api/messages",
        data: {message: message}
      })
    );
  };
