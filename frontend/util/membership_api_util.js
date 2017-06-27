


export const createMembership = (membership) => {

  return (
    $.ajax({
      type: "POST",
      url: "api/memberships",
      data: {channel: {name: membership.name, secret: membership.secret},
            user_ids: membership.usernames }
    })
  );
};
