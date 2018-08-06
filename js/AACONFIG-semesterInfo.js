
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("08/28/2018 4:00:00"),
    lastDayOfSemester:  new Date("12/11/2018 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("Labor Day",          new Date("09/3/2018"),  new Date("09/3/2018")),
        new VacationDays("Fall Break",         new Date("10/13/2018"), new Date("10/16/2018")),
        new VacationDays("Thanksgiving Break", new Date("11/21/2018"), new Date("11/25/2018")),
    ]
};
