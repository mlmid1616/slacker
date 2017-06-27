

export const fetchAllUsers = () => {
  return(
    $.ajax({
      type: "GET",
      url: "api/users"
    })
  );
};
