angular.module('lunchRecs')
  .constant('AUTH', {
    oauth: OAuth({
        consumer: {
            public: 'xlV_7xGsuRGawpo8UJW-3Q',
            secret: 'C-F65JJ45kylMeQyFGjOkRwYQcI'
        },
        signature_method: 'HMAC-SHA1',
        version: '2.0'
    }),
    token: {
      public: 'c--Nslr9TEFvngE3QNFzAfmgxwFVw6F_',
      secret: 'ExRHQxRTAL81HEeH1Pi1Sb5fkTk'
    }
  })
