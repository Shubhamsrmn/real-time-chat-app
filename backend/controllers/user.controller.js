export const createUserFun = async (req, res) => {
  try {
  } catch (error) {}
};
export const userLoginFun = async (req, res) => {
  try {
    res.json({
      hello: "helloworld",
    });
  } catch (error) {
    res.json({
      hello: "helloworldwitherror",
    });
  }
};

// authenticated paths

export const getProfileFun = async (req, res) => {
  try {
    res.json({
      hello: "helloworld",
    });
  } catch (error) {
    res.json({
      hello: "helloworldwitherror",
    });
  }
};
