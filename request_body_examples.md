## API Examples

1. /add-task 
    > POST
    
    ```json
        "action" : "refill",
        "frequency": "weekly",
        "requiredSkills": ["Cleaning"]
    ```

2. /add-asset
   > POST

    ```json
        "action" : "soap-dispenser",
        "location": {
            "building" : "AB1",
            "floor" : "5th",
            "roomNo" : "6A",
        },
        "possibleTasks": ["5d2625ea1100c6048b6ad00f"]
    ```
3. /add-worker

    > POST
    ```json
        "firstName" : "Ram",
        "lastName": "Kumar",
        "skills": ["cleaning"]
    ```