const failResponse = [
    {
      ok: false,
      choices: [{
        messages: '',
      }],
    },
  ];

  const successResponse = [
    {
      ok: true,
      choices: [{
        messages: 'you did it',
      }],
    },
  ];


module.exports = {failResponse, successResponse};