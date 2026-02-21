#!/usr/bin/env sh
# Standard Gradle Wrapper for Linux
export JAVA_OPTS="-Xmx1024m"
exec java -jar "$(dirname "$0")/gradle/wrapper/gradle-wrapper.jar" "$@"
