#!/bin/bash
grunt watch &
lein cljsbuild auto dev
