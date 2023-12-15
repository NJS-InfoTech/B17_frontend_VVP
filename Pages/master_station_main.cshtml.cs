using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
public class master_station_mainModel : PageModel
 {
    public populatetable Data { get; set; }
    // Public property to hold the hardcoded text
    public string HardcodedText { get; set; }

    public master_station_mainModel(ILogger<master_station_mainModel> logger)
    {
        // Initialize the hardcoded text
        HardcodedText = "Assembly";
    }
    public class populatetable
    {
        public string JoNumber { get; set; }
        public DateTime JoSchedStartDate { get; set; }
        public DateTime JoSchedCompletionDate { get; set; }
        public string Item { get; set; }
        public int CurrentQty { get; set; }
        public int TotalQty { get; set; }
        public string Catalog { get; set; }
        public string Customer { get; set; }
        public DateTime SoSchedShipDate { get; set; }
        public string Notes { get; set; }
        public string CompletedBy { get; set; }
        public string StartedBy { get; set; }
        public string TaktTime { get; set; }
    }

    public void OnGet()
        {
        Data = new populatetable
        {
            JoNumber = "91725275",
            JoSchedStartDate = DateTime.Parse("05/03/2021"),
            JoSchedCompletionDate = DateTime.Parse("05/03/2021"),
            Item = "VISTA RACK-1464142",
            CurrentQty = 1,
            TotalQty = 1,
            Catalog = "36091-A0C5L1NVOP1STDS6-S136",
            Customer = "S&C ELECTRIC CANADA LTD.",
            SoSchedShipDate = DateTime.Parse("05/21/2021"),
            Notes = "999991 (06/12/2023 04:53:19)",
            CompletedBy = "838:59:59",
            StartedBy = "HARDCODED_USER", // Replace with the actual value
            TaktTime = "838:59:59"

        };
    }
 }

