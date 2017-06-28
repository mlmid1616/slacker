

export const fetchUserChannels = (user) => {
  return(
    $.ajax({
      type: "GET",
      url: "api/channels",
      data: user
    })
  );
};





export const fetchCurrentChannel = (channel_id) => {
  return(
    $.ajax({
      type: "GET",
      url: `api/channels/${channel_id}`,
      data: {channel: channel_id}
    })
  );
};
