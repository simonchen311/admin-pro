// mock/auth.ts
var auth_default = [
  {
    url: "/mock/api/getAuthList",
    method: "get",
    response: () => {
      return {
        data: {
          code: 0,
          message: "success",
          data: [
            {
              name: "\u9879\u76EE\u5217\u8868",
              roleId: 1,
              viewRole: "",
              roleList: [
                {
                  name: "\u9879\u76EE\u8BE6\u60C5",
                  roleId: 4,
                  viewRole: "",
                  roleList: [
                    {
                      name: "\u5BA1\u6838",
                      roleId: 5
                    }
                  ]
                },
                {
                  name: "\u67E5\u770B",
                  roleId: 2
                },
                {
                  name: "\u5220\u9664",
                  roleId: 3
                }
              ]
            },
            {
              name: "\u5DE5\u7A0B\u5217\u8868",
              roleId: 6,
              viewRole: "",
              roleList: [
                {
                  name: "\u5DE5\u7A0B\u8BE6\u60C5",
                  roleId: 9,
                  viewRole: "",
                  roleList: [
                    {
                      name: "\u4FEE\u6539",
                      roleId: 10
                    }
                  ]
                },
                {
                  name: "\u67E5\u770B",
                  roleId: 7
                },
                {
                  name: "\u5220\u9664",
                  roleId: 8
                }
              ]
            },
            {
              name: "\u7528\u6237\u7BA1\u7406",
              roleId: 11,
              viewRole: "",
              roleList: [
                {
                  name: "\u5220\u9664",
                  roleId: 14,
                  viewRole: ""
                },
                {
                  name: "\u67E5\u770B",
                  roleId: 12
                },
                {
                  name: "\u4FEE\u6539",
                  roleId: 13
                }
              ]
            },
            {
              name: "\u89D2\u8272\u7BA1\u7406",
              roleId: 15,
              viewRole: "",
              roleList: [
                {
                  name: "\u89D2\u8272\u5220\u9664",
                  roleId: 17,
                  viewRole: ""
                },
                {
                  name: "\u67E5\u770B",
                  roleId: 18
                },
                {
                  name: "\u4FEE\u6539",
                  roleId: 16
                }
              ]
            }
          ]
        }
      };
    }
  }
];
export {
  auth_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9hdXRoLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9TdW5naGFvL0RvY3VtZW50cy9TdHVkeS9hZG1pbi1wcm8vbW9jay9hdXRoLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9TdW5naGFvL0RvY3VtZW50cy9TdHVkeS9hZG1pbi1wcm8vbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvU3VuZ2hhby9Eb2N1bWVudHMvU3R1ZHkvYWRtaW4tcHJvL21vY2svYXV0aC50c1wiO2ltcG9ydCB7IE1vY2tNZXRob2QgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuXHR7XG5cdFx0dXJsOiAnL21vY2svYXBpL2dldEF1dGhMaXN0Jyxcblx0XHRtZXRob2Q6ICdnZXQnLFxuXHRcdHJlc3BvbnNlOiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0Y29kZTogMCxcblx0XHRcdFx0XHRtZXNzYWdlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRuYW1lOiAnXHU5ODc5XHU3NkVFXHU1MjE3XHU4ODY4Jyxcblx0XHRcdFx0XHRcdFx0cm9sZUlkOiAxLFxuXHRcdFx0XHRcdFx0XHR2aWV3Um9sZTogJycsXG5cdFx0XHRcdFx0XHRcdHJvbGVMaXN0OiBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ1x1OTg3OVx1NzZFRVx1OEJFNlx1NjBDNScsXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlSWQ6IDQsXG5cdFx0XHRcdFx0XHRcdFx0XHR2aWV3Um9sZTogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlTGlzdDogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ1x1NUJBMVx1NjgzOCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm9sZUlkOiA1XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICdcdTY3RTVcdTc3MEInLFxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZUlkOiAyXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAnXHU1MjIwXHU5NjY0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGVJZDogM1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTogJ1x1NURFNVx1N0EwQlx1NTIxN1x1ODg2OCcsXG5cdFx0XHRcdFx0XHRcdHJvbGVJZDogNixcblx0XHRcdFx0XHRcdFx0dmlld1JvbGU6ICcnLFxuXHRcdFx0XHRcdFx0XHRyb2xlTGlzdDogW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICdcdTVERTVcdTdBMEJcdThCRTZcdTYwQzUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZUlkOiA5LFxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld1JvbGU6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZUxpc3Q6IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICdcdTRGRUVcdTY1MzknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvbGVJZDogMTBcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ1x1NjdFNVx1NzcwQicsXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlSWQ6IDdcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICdcdTUyMjBcdTk2NjQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZUlkOiA4XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRuYW1lOiAnXHU3NTI4XHU2MjM3XHU3QkExXHU3NDA2Jyxcblx0XHRcdFx0XHRcdFx0cm9sZUlkOiAxMSxcblx0XHRcdFx0XHRcdFx0dmlld1JvbGU6ICcnLFxuXHRcdFx0XHRcdFx0XHRyb2xlTGlzdDogW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICdcdTUyMjBcdTk2NjQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZUlkOiAxNCxcblx0XHRcdFx0XHRcdFx0XHRcdHZpZXdSb2xlOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ1x1NjdFNVx1NzcwQicsXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlSWQ6IDEyXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAnXHU0RkVFXHU2NTM5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGVJZDogMTNcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG5hbWU6ICdcdTg5RDJcdTgyNzJcdTdCQTFcdTc0MDYnLFxuXHRcdFx0XHRcdFx0XHRyb2xlSWQ6IDE1LFxuXHRcdFx0XHRcdFx0XHR2aWV3Um9sZTogJycsXG5cdFx0XHRcdFx0XHRcdHJvbGVMaXN0OiBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ1x1ODlEMlx1ODI3Mlx1NTIyMFx1OTY2NCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlSWQ6IDE3LFxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld1JvbGU6ICcnXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAnXHU2N0U1XHU3NzBCJyxcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGVJZDogMThcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICdcdTRGRUVcdTY1MzknLFxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZUlkOiAxNlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbl0gYXMgTW9ja01ldGhvZFtdO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLElBQU8sZUFBUTtBQUFBLEVBQ2Q7QUFBQSxJQUNDLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFVBQVUsTUFBTTtBQUNmLGFBQU87QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxVQUNULE1BQU07QUFBQSxZQUNMO0FBQUEsY0FDQyxNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsY0FDUixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsZ0JBQ1Q7QUFBQSxrQkFDQyxNQUFNO0FBQUEsa0JBQ04sUUFBUTtBQUFBLGtCQUNSLFVBQVU7QUFBQSxrQkFDVixVQUFVO0FBQUEsb0JBQ1Q7QUFBQSxzQkFDQyxNQUFNO0FBQUEsc0JBQ04sUUFBUTtBQUFBLG9CQUNUO0FBQUEsa0JBQ0Q7QUFBQSxnQkFDRDtBQUFBLGdCQUNBO0FBQUEsa0JBQ0MsTUFBTTtBQUFBLGtCQUNOLFFBQVE7QUFBQSxnQkFDVDtBQUFBLGdCQUNBO0FBQUEsa0JBQ0MsTUFBTTtBQUFBLGtCQUNOLFFBQVE7QUFBQSxnQkFDVDtBQUFBLGNBQ0Q7QUFBQSxZQUNEO0FBQUEsWUFDQTtBQUFBLGNBQ0MsTUFBTTtBQUFBLGNBQ04sUUFBUTtBQUFBLGNBQ1IsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGdCQUNUO0FBQUEsa0JBQ0MsTUFBTTtBQUFBLGtCQUNOLFFBQVE7QUFBQSxrQkFDUixVQUFVO0FBQUEsa0JBQ1YsVUFBVTtBQUFBLG9CQUNUO0FBQUEsc0JBQ0MsTUFBTTtBQUFBLHNCQUNOLFFBQVE7QUFBQSxvQkFDVDtBQUFBLGtCQUNEO0FBQUEsZ0JBQ0Q7QUFBQSxnQkFDQTtBQUFBLGtCQUNDLE1BQU07QUFBQSxrQkFDTixRQUFRO0FBQUEsZ0JBQ1Q7QUFBQSxnQkFDQTtBQUFBLGtCQUNDLE1BQU07QUFBQSxrQkFDTixRQUFRO0FBQUEsZ0JBQ1Q7QUFBQSxjQUNEO0FBQUEsWUFDRDtBQUFBLFlBQ0E7QUFBQSxjQUNDLE1BQU07QUFBQSxjQUNOLFFBQVE7QUFBQSxjQUNSLFVBQVU7QUFBQSxjQUNWLFVBQVU7QUFBQSxnQkFDVDtBQUFBLGtCQUNDLE1BQU07QUFBQSxrQkFDTixRQUFRO0FBQUEsa0JBQ1IsVUFBVTtBQUFBLGdCQUNYO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDQyxNQUFNO0FBQUEsa0JBQ04sUUFBUTtBQUFBLGdCQUNUO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDQyxNQUFNO0FBQUEsa0JBQ04sUUFBUTtBQUFBLGdCQUNUO0FBQUEsY0FDRDtBQUFBLFlBQ0Q7QUFBQSxZQUNBO0FBQUEsY0FDQyxNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsY0FDUixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsZ0JBQ1Q7QUFBQSxrQkFDQyxNQUFNO0FBQUEsa0JBQ04sUUFBUTtBQUFBLGtCQUNSLFVBQVU7QUFBQSxnQkFDWDtBQUFBLGdCQUNBO0FBQUEsa0JBQ0MsTUFBTTtBQUFBLGtCQUNOLFFBQVE7QUFBQSxnQkFDVDtBQUFBLGdCQUNBO0FBQUEsa0JBQ0MsTUFBTTtBQUFBLGtCQUNOLFFBQVE7QUFBQSxnQkFDVDtBQUFBLGNBQ0Q7QUFBQSxZQUNEO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRDsiLAogICJuYW1lcyI6IFtdCn0K
