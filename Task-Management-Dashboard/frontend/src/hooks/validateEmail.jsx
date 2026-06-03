

export const isAllowedEmail = (email) => {
  const domains = [
    "@gmail.com",
    "@outlook.com",
    "@yahoo.com",
  ];

  return domains.some((domain) => email.endsWith(domain));
};