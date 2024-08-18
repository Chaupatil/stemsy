#!/bin/bash

# Read each line from img.txt
while IFS= read -r filename; do
  # Create an empty file with the name read from img.txt
  touch "$filename"
done < img.txt
