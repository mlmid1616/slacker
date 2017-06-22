

export const fetchUserChannels = (user) => {
  return $.ajax({
    type: "GET",
    url: "api/channels",
    data: user
  });
};
