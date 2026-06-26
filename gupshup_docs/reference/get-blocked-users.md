> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Get List of Blocked Users

**Description**

This API allows you to retrieve a paginated list of WhatsApp users blocked by your business account. It is useful for:

* Auditing user blocks
* Building admin tools
* Monitoring abusive activity patterns

## Endpoints

```bash
GET https://api.gupshup.io/wa/app/`{appId}`/user/blocklist?limit=`{limit}`&after=`{after}`
```

## cURL Request

```curl
curl --location --globoff 'https://api.gupshup.io/wa/app/`{appId}`/user/blocklist?limit=`{limit}`&after=`{after}`' \
--header 'apikey: `{api_key}`'
```

## Request Parameters

| Key              | Description                                                           | Constraints                                                                             |
| :--------------- | :-------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| **Headers**      |                                                                       |                                                                                         |
| apikey           | Apikey of app                                                         | Should be a valid gupshup.io apikey                                                     |
| **Path Params**  |                                                                       |                                                                                         |
| appId            | appId of the app                                                      | Should be a valid appId                                                                 |
| **Query Params** |                                                                       |                                                                                         |
| limit            | Limits the number of blocked users returned in the response.          | - it's optional - default value is 100 if not specified - maximum value is 100          |
| after            | Specifies the starting point for the next set of results. (Next page) | - it's optional - the value of this field is present in the response of the get request |