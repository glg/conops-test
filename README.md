# conops-test

## To Run:

### From Github

```
docker build -t conopstest .
docker run -d -p 3001:3001 conopstest
```

### From DockerHub

```
docker pull sayeefb/conopstest
docker run -d -p 3001:3001 sayeefb/conopstest
```

## Instructions:

This site is to test the skill of debugging problems in simple sites.

The site is a simple employee information site for HR. All that is needed is the employee id.

A ticket has come in about certain employees are not showing properly.

Case 1: Employee Id 18 is showing properly\
Case 2: Employee Id 17 the manager name is not showing\
Case 3: Employee Id 12 the manager name and Department Mission is not showing\
Case 4: Employee Id 33 no information is showing\
Case 5: Employee Id 27 the department, manager name and Department Mission is not showing

Server logs are as follows:

Case 1:
```
No pertinent server logs
```

Case 2:
```
No pertinent server logs
```

Case 3:
```
YAMLException: can not read a block mapping entry; a multiline key may not be an implicit key (3:10)

 1 | mission: Lorem ipsum dolor sit amet, cons ...
 2 | veniam, quis nostrud exercitation
 3 | managerId: 1
--------------^
    at generateError (/conops-test/node_modules/js-yaml/lib/loader.js:183:10)
    at throwError (/conops-test/node_modules/js-yaml/lib/loader.js:187:9)
    at readBlockMapping (/conops-test/node_modules/js-yaml/lib/loader.js:1145:9)
    at composeNode (/conops-test/node_modules/js-yaml/lib/loader.js:1441:12)
    at readDocument (/conops-test/node_modules/js-yaml/lib/loader.js:1625:3)
    at loadDocuments (/conops-test/node_modules/js-yaml/lib/loader.js:1688:5)
    at Object.load (/conops-test/node_modules/js-yaml/lib/loader.js:1714:19)
    at /conops-test/app.js:22:23
    at Layer.handle [as handle_request] (/conops-test/node_modules/express/lib/router/layer.js:95:5)
    at next (/conops-test/node_modules/express/lib/router/route.js:137:13)
```

Case 4:
```
No Pertinent server logs
```

Case 5:
```
Error: ENOENT: no such file or directory, open './config/undefined.yml'
    at Object.openSync (fs.js:458:3)
    at Object.readFileSync (fs.js:360:35)
    at /conops-test/app.js:22:31
    at Layer.handle [as handle_request] (/conops-test/node_modules/express/lib/router/layer.js:95:5)
    at next (/conops-test/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/conops-test/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/conops-test/node_modules/express/lib/router/layer.js:95:5)
    at /conops-test/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/conops-test/node_modules/express/lib/router/index.js:335:12)
    at next (/conops-test/node_modules/express/lib/router/index.js:275:10)

```