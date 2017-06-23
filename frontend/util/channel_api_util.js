

export const fetchUserChannels = (user) => {
  return(
    $.ajax({
      type: "GET",
      url: "api/channels",
      data: user
    })
  );
};

export const createChannel = (channel) => {
  return (
    $.ajax({
      type: "POST",
      url: "api/channels",
      data: channel
    })
  );
};
