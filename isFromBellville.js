var isFromBellville = function (isFromBellville) {
  var Registration = isFromBellville.startsWith("CY");
  return Registration;
};
isFromBellville("CY 262");
isFromBellville("CY 400");