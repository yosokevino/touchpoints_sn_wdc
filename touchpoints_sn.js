(function () {

    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var cols = [{
            id: "number",
            alias: "number",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "assigned_to",
            alias: "assigned_to",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "assignment_group",
            alias: "assignment_group",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "sys_created_on",
            alias: "sys_created_on",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "case_report",
            alias: "case_report",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "case",
            alias: "case",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "comments_and_work_notes",
            alias: "comments_and_work_notes",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "category",
            alias: "category",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "subcategory",
            alias: "subcategory",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "closed_at",
            alias: "closed_at",
            dataType: tableau.dataTypeEnum.string
        }];

        var tableSchema = {
            id: "SN_Customer_Service_Data",
            alias: "SN_Customer_Service_Data",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    myConnector.getData = function (table, doneCallback) {
        $.getJSON("", function (data) {
            var feat = data.result,
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "number": feat[i].number,
                    "assigned_to": feat[i].assigned_to,
                    "assignment_group": feat[i].assignment_group,
                    "sys_created_on": feat[i].sys_created_on,
                    "case_report": feat[i].case_report,
                    "case": feat[i].case,
                    "comments_and_work_notes": feat[i].comments_and_work_notes,
                    "category": feat[i].category,
                    "subcategory": feat[i].subcategory,
                    "closed_at": feat[i].closed_at
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "SN Customer Service Data";
            tableau.submit();
        });
    });
})();
