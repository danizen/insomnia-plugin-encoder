# insomnia-plugin-encoder
encode a literal string or variable as a URI component

## Motivation

This plugin is motivated by a REST server that accepts an encoded URI as an argument in the URL.
Not-only special characters, but also '/' must be encoded so that the REST server will see the 
encoded URI as a part of the Path part of the request URI.

An example:

    https://example.com/api/thing/{id}/details

Suppose that the id is itself a fully encoded URI - e.g. https://repo.example.com/things/5fa5e931-9898-4c95-a00d-c07e56a21990.
A concrete request URI might be:

    https://example.com/api/thing/https%3A%2F%2Frepo.example.com%2Fthings%2F5fa5e931-9898-4c95-a00d-c07e56a21990/details

## Related Issues

This seems to be related to Insomnia issues as follows:

 - [#1447](https://github.com/getinsomnia/insomnia/issues/1445) - This plugin is a workaround for this base issue.
 - [#417](https://github.com/getinsomnia/insomnia/issues/417) - An issue that proposes an option not to encode 
   portions of the query. This is therefore not the same thing.

## Usage

Enter `encode_uri` in the URL as you are building the request.  You will not be able to specify an argument to the 
function now easily, but then you may click on it in the URL and specify an argument afterwards.

