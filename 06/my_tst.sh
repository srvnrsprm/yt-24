#!/bin/bash
crrct=0
ttl=0
frst=1
lst=5
while [ 1 ]; do
  read prmpt <<< `cat qstns | sed -n "${frst}p"`
  if [ -n "$prmpt" ]; then
    readarray chces <<< `cat qstns | sed -n "$((frst+1)),${lst}p"`
    echo $prmpt
    for((i=0;i<${#chces};i++)) {
      if [ "${chces[$i]:0:1}" = "*" ]; then 
        chces[$i]=${chces[$i]:1}
        rght_answr=${chces[$i]}
      fi
    }
    select answr in "${chces[@]}"; do
      break
    done
    if [ "$answr" = "$rght_answr" ]; then
      crrct=$((crrct+1))
    fi
    ttl=$((ttl+1))
  else
    break
  fi
  frst=$((frst+5))
  lst=$((lst+5))
done
echo "The correct answers are $crrct"
prcnt=$((crrct*100/ttl))
if [ $prcnt -le 50 ]; then
  echo -e "\033[0;31mYou scored $prcnt marks"
else
  echo -e "\033[0;32mYou scored $prcnt marks"
fi
