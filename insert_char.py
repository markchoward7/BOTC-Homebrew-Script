import json

import requests

NIGHTSHEET_URL = "https://script.bloodontheclocktower.com/data/nightsheet.json"
JSON_FILEPATH = "./public/roles.json"
JSON_STRUCT = {
    "id": "",
    "name": "",
    "team": "",
    "firstNight": 0,
    "firstNightReminder": "",
    "otherNight": 0,
    "otherNightReminder": "",
    "reminders": [],
    "setup": False,
    "ability": "",
}


def main():
    new_char = input("Enter new character name: ").strip()
    JSON_STRUCT.update({"name": new_char})
    resp = requests.get(NIGHTSHEET_URL)
    resp_json = resp.json()
    first_order, other_order = resp_json["firstNight"], resp_json["otherNight"]
    with open(JSON_FILEPATH, "r") as json_file:
        role_json = json.load(json_file)
    role_json.append(JSON_STRUCT)

    for role in role_json:
        if role["name"] in first_order:
            role["firstNight"] = first_order.index(role["name"]) + 1
        else:
            role["firstNight"] = 0
        if role["name"] in other_order:
            role["otherNight"] = other_order.index(role["name"]) + 1
        else:
            role["otherNight"] = 0

    with open(JSON_FILEPATH, "w") as json_file:
        json.dump(role_json, json_file)

    print(f"First Night Dusk: {first_order.index('DUSK') + 1}")
    print(f"Other Night Dusk: {other_order.index('DUSK') + 1}")
    print(f"First Night Dawn: {first_order.index('DAWN') + 1}")
    print(f"Other Night Dawn: {other_order.index('DAWN') + 1}")
    print(f"Minion Info: {first_order.index('MINION') + 1}")
    print(f"Demon Info: {first_order.index('DEMON') + 1}")


if __name__ == "__main__":
    main()
