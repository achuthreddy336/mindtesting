const noOfDay = 3;

const testSuites = [
    {
        day: 1,
        dayWiseTestcase: [
            {
                fileName: [
                    "OneTwoTest.java"
                ],
                testcases: [
                    ""
                ]
            }
        ]
    },
    {
        day: 2,
        dayWiseTestcase: [
            {
                fileName: [
                    "OneTwoTest.java"
                ],
                testcases: [
             { name: "testUpdateOrderStatus", value: "test Update Order Status" },
			 { name: "testLoginUser", value: "Login User TC validated successfully" },
                    { name: "testPlaceOrder", value: "Place Order TC validated Successfully" },
                    { name: "testRegisterUser", value: "Register User Successfully" },
                    { name: "testCreateHospital", value: "Create Hospital Successfully" },
                    {
                        name: "testTechnicianAndSupplierShouldNotAccessHospitalApi",
                        value: "test Technician And Supplier Should Not Access Hospital Api"
                    },
                    
                    {
                        name: "testLoginWithWrongUsernameOrPassword",
                        value: "test Login With Wrong Username  OrPassword"
                    },
                    { name: "testGetAllOrders", value: "testGetAllOrders" },
                    {
                        name: "testHospitalAndTechnicianShouldNotAccessSupplierApi",
                        value: "test Hospital And Technician Should Not Access Supplier Api"
                    },
                    { name: "testScheduleMaintenance", value: "test Schedule Maintenance" },
                    
                    { name: "testGetAllMaintenance", value: "test Get All Maintenance" },
                    {
                        name: "testHospitalAndSupplierShouldNotAccessTechnicianApi",
                        value: "test Hospital And Supplier Should Not Access Technician Api"
                    },
                    { name: "testAddEquipment", value: "testAddEquipment" }
                ]
            }
        ]
    },
    {
        day: 3,
        dayWiseTestcase: [
            {
                fileName: [
                    "day_3.spec.ts"
                ],
                testcases: [
				{ name: "testUpdateMaintenance", value: "test Update Maintenance" },
                    "should initialize itemForm with required fields",
                    "should mark name field as invalid if empty",
                    "should mark location field as invalid if empty"
                ]
            }
        ]
    },
    // {
    //     day: 4,
    //     dayWiseTestcase: [
    //         {
    //             fileName: [
    //                 "day_14_15.test.js"
    //             ],
    //             testcases: [
    //                 "login function should log correct information - Day 15"
    //             ]
    //         }
    //     ]
    // },
    // {
    //     day: 5,
    //     dayWiseTestcase: [
    //         {
    //             fileName: [
    //                 "day_14_15.test.js"
    //             ],
    //             testcases: [
    //                 "register function should log correct information - Day 15"
    //             ]
    //         }
    //     ]
    // },
    // {
    //     day: 6,
    //     dayWiseTestcase: [
    //         {
    //             fileName: [
    //                 "day_6.spec.ts"
    //             ],
    //             testcases: [
    //                 "should update order status",
    //                 "should add equipment",
    //                 "should get orders",
    //                 "should get maintenance tasks",
    //                 "should get hospitals",
    //                 "should update maintenance",
    //                 "should order equipment",
    //                 "should schedule maintenance",
    //                 "should create hospital"
    //             ]
    //         }
    //     ]
    // }
]

module.exports = {
    noOfDay,
    testSuites
};
