import { generate } from 'cucumber-html-reporter';

var options = {
        theme: 'bootstrap',
        jsonFile: 'report/cucumber_report.json',
        output: 'report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "Test Environment": "Local",
            "Browser": "Chrome  125.0.6422.60",
            "Platform": "Mac 12.7.5",
        },
        failedSummaryReport: true,
    };

    generate(options);