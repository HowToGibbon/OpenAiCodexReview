private static string RecursiveModulo(char[] input) {
  var groupedDigits = new List<string>();
  // TODO: von Anfang an array 
  for (int i = 0; i < input.Length; i += 3)
  {
    if (i + 2 == input.Length) {
      groupedDigits.Add($"{input[i]}{input[i + 1]}");
      continue;
    }

    if (i + 1 == input.Length) {
      groupedDigits.Add($"{input[i]}");
      continue;
    }

    groupedDigits.Add($"{input[i]}{input[i + 1]}{input[i + 2]}");
  }

  var tmp = new List<char>();
  var skip = true;
  foreach (var subRef in groupedDigits) {
    var value = int.Parse(subRef);
    var result = value % 97;
    var resultAsCharArray = result.ToString().ToCharArray();
    if (skip) {
      skip = false;
    } else {
      for (int i = 0; i < subRef.Length - resultAsCharArray.Length; i++)
      {
        tmp.Add('0');
      }
    }

    foreach (var t in resultAsCharArray) {
      tmp.Add(t);
    }
  }

  if (tmp.Count < 3) {
    return string.Join(string.Empty, tmp);
  }

  return RecursiveModulo(tmp.ToArray());
}
