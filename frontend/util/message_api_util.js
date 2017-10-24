  export const fetchSelectedMessages = (channel_id) => {
    return(
      $.ajax({
        type: "GET",
        url: "api/messages",
        data: {channel: channel_id}
      })
    );
  };

  export const fetchSelectedMessage = (message_id) => {
    return (
      $.ajax({
        type: "GET",
        url: "api/messages/${message_id}",
        data: {message: message_id}
      })
    )
  }


  export const createSelectedMessage = message => {
    return(
      $.ajax({
        type:"POST",
        url:"api/messages",
        data: {message: message}
      })
    );
  };

  export const createMessageReply = reply => {
    return(
      $.ajax({
        type:"POST",
        url:"api/replies",
        data: {reply: reply}
      })
    )
  }

  export const updateSelectedMessage = message => {
    return(
      $.ajax({
        type:"POST",
        url:"api/message/${message_id}",
        data: {message: message}
      })
    )
  }
