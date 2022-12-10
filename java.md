**1. How to fetch script output and add to logging**

Pass the process object to below method and allow it to add the stderr, stdout to default logging

```java
private void logScriptRun(Process process) throws IOException {

    String s;
    BufferedReader stdOutput = new BufferedReader(new
            InputStreamReader(process.getInputStream()));
    BufferedReader stdError = new BufferedReader(new
            InputStreamReader(process.getErrorStream()));

    log.info("******************** StdOut logs from script execution ********************");
    while ((s = stdOutput.readLine()) != null) {
        log.info(s);
    }
    log.info("******************** StdError logs from script execution ********************");
    while ((s = stdError.readLine()) != null) {
        log.error(s);
    }
    log.info("******************** script execution logging finishes here ********************");
}
```
