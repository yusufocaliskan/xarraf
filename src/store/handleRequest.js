const handleRequest = async (request, thunkApi) => {
  try {
    return await request();
  } catch (err) {
    console.log('RESSS ERROR-->', err);
    return thunkApi.rejectWithValue({
      message: err.data ? err.data.messages : err.messages,
    });
  }
};
export default handleRequest;
