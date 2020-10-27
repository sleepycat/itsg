module.exports = {
	name: 'ITSG-33a',
	'AC-1': {
		family: 'AC',
		name: 'Access Control Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) An access control policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the access control policy and associated access controls.\n(B) The organization reviews and updates the current:\n(a) Access control policy [Assignment: organization-defined frequency]; and\n(b) Access control procedures [Assignment: organization-defined frequency].',
	},
	'AC-2': {
		family: 'AC',
		name: 'Account Management',
		description:
			'(A) The organization identifies and selects the following types of information system accounts to support organizational missions/business functions: [Assignment: organization-defined information system account types].\n(B) The organization assigns account managers for information system accounts.\n(C) The organization establishes conditions for group and role membership.\n(D) The organization specifies authorized users of the information system, group and role membership, and access authorizations (i.e., privileges) and other attributes (as required) for each account.\n(E) The organization requires approvals by [Assignment: organization-defined personnel or roles] for requests to create information system accounts.\n(F) The organization creates, enables, modifies, disables, and removes information system accounts in accordance with [Assignment: organization-defined procedures or conditions].\n(G) The organization monitors the use of information system accounts.\n(H) The organization notifies account managers:\n(a) When accounts are no longer required;\n(b) When users are terminated or transferred; and\n(c) When individual information system usage or need-to-know changes.\n(I) The organization authorizes access to the information system based on:\n(a) A valid access authorization;\n(b) Intended system usage; and\n(c) Other attributes as required by the organization or associated missions/business functions.\n(J) The organization reviews accounts for compliance with account management requirements [Assignment: organization-defined frequency].\n(K) The organization establishes a process for reissuing shared/group account credentials (if deployed) when individuals are removed from the group.\n',
	},
	'AC-2 (1)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | AUTOMATED SYSTEM ACCOUNT MANAGEMENT\nThe organization employs automated mechanisms to support the management of information system accounts.',
	},
	'AC-2 (2)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | REMOVAL OF TEMPORARY / EMERGENCY ACCOUNTS\nThe information system automatically [Selection: removes; disables] temporary and emergency accounts after [Assignment: organization-defined time period for each type of account].',
	},
	'AC-2 (3)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | DISABLE INACTIVE ACCOUNTS\nThe information system automatically disables inactive accounts after [Assignment: organization-defined time period].',
	},
	'AC-2 (4)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | AUTOMATED AUDIT ACTIONS\nThe information system automatically audits account creation, modification, enabling, disabling, and removal actions, and notifies [Assignment: organization-defined personnel or roles]. Related controls: AU-2, AU-12.',
	},
	'AC-2 (5)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | INACTIVITY LOGOUT\nThe organization requires that users log out when [Assignment: organization-defined time-period of expected inactivity or description of when to log out]. Related controls: SC-23',
	},
	'AC-2 (6)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | DYNAMIC PRIVILEGE MANAGEMENT\nThe information system implements the following dynamic privilege management capabilities: [Assignment: organization-defined list of dynamic privilege management capabilities].',
	},
	'AC-2 (7)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | ROLE-BASED SCHEMES\n(a) The organization establishes and administers privileged user accounts in accordance with a role-based access scheme that organizes allowed information system access and privileges into roles;\n(b) The organization monitors privileged role assignments; and\n(c) The organization takes [Assignment: organization-defined actions] when privileged role assignments are no longer appropriate.',
	},
	'AC-2 (8)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | DYNAMIC ACCOUNT CREATION\nThe information system creates [Assignment: organization-defined information system accounts] dynamically.',
	},
	'AC-2 (9)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | RESTRICTIONS ON USE OF SHARED GROUPS / ACCOUNTS\nThe organization only permits the use of shared/group accounts that meet [Assignment: organization-defined conditions for establishing shared/group accounts].',
	},
	'AC-2 (10)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | SHARED / GROUP ACCOUNT CREDENTIAL TERMINATION\nThe information system terminates shared/group account credentials when members leave the group.',
	},
	'AC-2 (11)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | USAGE CONDITIONS\nThe information system enforces [Assignment: organization-defined circumstances and/or usage conditions] for [Assignment: organization-defined information system accounts].',
	},
	'AC-2 (12)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | ACCOUNT MONITORING / ATYPICAL USAGE\n(a) The organization monitors information system accounts for [Assignment: organization-defined atypical use]; and\n(b) The organization reports atypical usage of information system accounts to [Assignment: organization-defined personnel or roles].',
	},
	'AC-2 (13)': {
		family: 'AC',
		name: 'Account Management',
		description:
			'ACCOUNT MANAGEMENT | DISABLE ACCOUNTS FOR HIGH-RISK INDIVIDUALS\nThe organization disables accounts of users posing a significant risk within [Assignment: organization-defined time period] of discovery of the risk.',
	},
	'AC-3': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'(A) The information system enforces approved authorizations for logical access to information and system resources in accordance with applicable access control policies.',
	},
	'AC-3 (1)': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'ACCESS ENFORCEMENT | RESTRICTED ACCESS TO PRIVILEGED FUNCTIONS',
	},
	'AC-3 (2)': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'ACCESS ENFORCEMENT | DUAL AUTHORIZATION\nThe information system enforces dual authorization for [Assignment: organization-defined privileged commands and/or other organization-defined actions].',
	},
	'AC-3 (3)': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'ACCESS ENFORCEMENT | MANDATORY ACCESS CONTROL\nThe information system enforces [Assignment: organization-defined mandatory access control policies] over all subjects and objects where the policy specifies that:\n(a) The policy is uniformly enforced across all subjects and objects within the boundary of the information system; \n(b) A subject that has been granted access to information is constrained from doing any of the following;\n- Passing the information to unauthorized subjects or objects;\n- Granting its privileges to other subjects; \n- Changing one or more security attributes on subjects, objects, the information system, or information system components;\n- Choosing the security attributes and attribute values to be associated with newly created or modified objects; or\n- Changing the rules governing access control; and\n(c) [Assignment: Organized-defined subjects] may explicitly be granted [Assignment: organization-defined privileges (i.e., they are trusted subjects)] such that they are not limited by some or all of the above constraints.',
	},
	'AC-3 (4)': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'ACCESS ENFORCEMENT | DISCRETIONARY ACCESS CONTROL\nThe information system enforces [Assignment: organization-defined discretionary access control policies] over defined subjects and objects where the policy specifies that a subject that has been granted access to information can do one or more of the following:\n(a) Pass the information to any other subjects or objects;\n(b) Grant its privileges to other subjects; \n(c) Change security attributes on subjects, objects, the information system, or the information system’s components;\n(d) Choose the security attributes to be associated with newly created or revised objects; or\n(e) Change the rules governing access control.',
	},
	'AC-3 (5)': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'ACCESS ENFORCEMENT | SECURITY-RELEVANT INFORMATION\nThe information system prevents access to [Assignment: organization-defined security-relevant information] except during secure, non-operable system states.',
	},
	'AC-3 (6)': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'ACCESS ENFORCEMENT | PROTECTION OF USER AND SYSTEM INFORMATION',
	},
	'AC-3 (7)': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'ACCESS ENFORCEMENT | ROLE-BASED ACCESS CONTROL\nThe information system enforces a role-based access control policy over defined subjects and objects and controls access based upon [Assignment: organization-defined roles and users authorized to assume such roles].',
	},
	'AC-3 (8)': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'ACCESS ENFORCEMENT | REVOCATION OF ACCESS AUTHORIZATIONS\nThe information system enforces the revocation of access authorizations resulting from changes to the security attributes of subjects and objects based on [Assignment: organization-defined rules governing the timing of revocations of access authorizations].',
	},
	'AC-3 (9)': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'ACCESS ENFORCEMENT | CONTROLLED RELEASE\nThe information system does not release information outside of the established system boundary unless:\n(a) The receiving [Assignment: organization-defined information system or system component] provides [Assignment: organization-defined security safeguards]; and\n(b) [Assignment: organization-defined security safeguards] are used to validate the appropriateness of the information designated for release.',
	},
	'AC-3 (10)': {
		family: 'AC',
		name: 'Access Enforcement',
		description:
			'ACCESS ENFORCEMENT | AUDITED OVERRIDE OF ACCESS CONTROL MECHANISMS\nThe organization employs an audited override of automated access control mechanisms under [Assignment: organization-defined conditions]. Related controls: AU-2, AU-6.',
	},
	'AC-4': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'(A) The information system enforces approved authorizations for controlling the flow of information within the system and between interconnected systems based on [Assignment: organization-defined information flow control policies]',
	},
	'AC-4 (1)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | OBJECT SECURITY ATTRIBUTES\nThe information system uses [Assignment: organization-defined security attributes] associated with [Assignment: organization-defined information, source, and destination objects] to enforce [Assignment: organization-defined information flow control policies] as a basis for flow control decisions.',
	},
	'AC-4 (2)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | PROCESSING DOMAINS\nThe information system uses protected processing domains to enforce [Assignment: organization-defined information flow control policies] as a basis for flow control decisions.',
	},
	'AC-4 (3)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | DYNAMIC INFORMATION FLOW CONTROL\nThe information system enforces dynamic information flow control based on [Assignment: organization-defined policies].',
	},
	'AC-4 (4)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | CONTENT CHECK ENCRYPTED INFORMATION\nThe information system prevents encrypted information from bypassing content-checking mechanisms by [Selection (one or more): decrypting the information; blocking the flow of the encrypted information; terminating communications sessions attempting to pass encrypted information; [Assignment: organization-defined procedure or method]]. Related Control: SI-4',
	},
	'AC-4 (5)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | EMBEDDED DATA TYPES\nThe information system enforces [Assignment: organization-defined limitations] on embedding data types within other data types.',
	},
	'AC-4 (6)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | METADATA\nThe information system enforces information flow control based on [Assignment: organization-defined metadata].',
	},
	'AC-4 (7)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | ONE-WAY FLOW MECHANISMS\nThe information system enforces [Assignment: organization-defined one-way flows] using hardware mechanisms.',
	},
	'AC-4 (8)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | SECURITY POLICY FILTERS\nThe information system enforces information flow control using [Assignment: organization-defined security policy filters] as a basis for flow control decisions for [Assignment: organization-defined information flows].',
	},
	'AC-4 (9)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | HUMAN REVIEWS\nThe information system enforces the use of human reviews for [Assignment: organization-defined information flows] under the following conditions: [Assignment: organization-defined conditions].',
	},
	'AC-4 (10)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | ENABLE / DISABLE SECURITY POLICY FILTERS\nThe information system provides the capability for privileged administrators to enable/disable [Assignment: organization-defined security policy filters] under the following conditions: [Assignment: organization-defined conditions].',
	},
	'AC-4 (11)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | CONFIGURATION OF SECURITY POLICY FILTERS\nThe information system provides the capability for privileged administrators to configure [Assignment: organization-defined security policy filters] to support different security policies.',
	},
	'AC-4 (12)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | DATA TYPE IDENTIFIERS\nThe information system, when transferring information between different security domains, uses [Assignment: organization-defined data type identifiers] to validate data essential for information flow decisions.',
	},
	'AC-4 (13)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | DECOMPOSITION INTO POLICY-RELEVANT SUBCOMPONENTS\nThe information system, when transferring information between different security domains, decomposes information into [Assignment: organization-defined policy-relevant subcomponents] for submission to policy enforcement mechanisms.',
	},
	'AC-4 (14)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | SECURITY POLICY FILTER CONSTRAINTS\nThe information system, when transferring information between different security domains, implements [Assignment: organization-defined security policy filters] requiring fully enumerated formats that restrict data structure and content.',
	},
	'AC-4 (15)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | DETECTION OF UNSANCTIONED INFORMATION\nThe information system, when transferring information between different security domains, examines the information for the presence of [Assignment: organized-defined unsanctioned information] and prohibits the transfer of such information in accordance with the [Assignment: organization-defined security policy].',
	},
	'AC-4 (16)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | INFORMATION TRANSFERS ON INTERCONNECTED SYSTEMS',
	},
	'AC-4 (17)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | DOMAIN AUTHENTICATION\nThe information system uniquely identifies and authenticates source and destination points by [Selection (one or more): organization, system, application, individual] for information transfer.',
	},
	'AC-4 (18)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | SECURITY ATTRIBUTE BINDING\nThe information system binds security attributes to information using [Assignment: organization-defined binding techniques] to facilitate information flow policy enforcement.',
	},
	'AC-4 (19)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | VALIDATION OF METADATA\nThe information system, when transferring information between different security domains, applies the same security policy filtering to metadata as it applies to data payloads.',
	},
	'AC-4 (20)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | APPROVED SOLUTIONS\nThe organization employs [Assignment: organization-defined solutions in approved configurations] to control the flow of [Assignment: organization-defined information] across security domains.',
	},
	'AC-4 (21)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | PHYSICAL / LOGICAL SEPARATION OF INFORMATION FLOWS\nThe information system separates information flows logically or physically using [Assignment: organization-defined mechanisms and/or techniques] to accomplish [Assignment: organization-defined required separations by types of information].',
	},
	'AC-4 (22)': {
		family: 'AC',
		name: 'Information Flow Enforcement',
		description:
			'INFORMATION FLOW ENFORCEMENT | ACCESS ONLY\nThe information system provides access from a single device to computing platforms, applications, or data residing on multiple different security domains, while preventing any information flow between the different security domains.',
	},
	'AC-5': {
		family: 'AC',
		name: 'Separation Of Duties',
		description:
			'(A) The organization:\n(a) Separates [Assignment: organization-defined duties of individuals];\n(b) Documents separation of duties of individuals; and \n(c) Defines information system access authorizations to support separation of duties.',
	},
	'AC-6': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'(A) The organization employs the principle of least privilege, allowing only authorized accesses for users (or processes acting on behalf of users) which are necessary to accomplish assigned tasks in accordance with organizational missions and business functions.',
	},
	'AC-6 (1)': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'LEAST PRIVILEGE | AUTHORIZE ACCESS TO SECURITY FUNCTIONS\nThe organization explicitly authorizes access to [Assignment: organization-defined security functions (deployed in hardware, software, and firmware) and security-relevant information].',
	},
	'AC-6 (2)': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'LEAST PRIVILEGE | NON-PRIVILEGED ACCESS FOR NON-SECURITY FUNCTIONS\nThe organization requires that users of information system accounts, or roles, with access to [Assignment: organization-defined security functions or security-relevant information], use non-privileged accounts or roles, when accessing non-security functions.',
	},
	'AC-6 (3)': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'LEAST PRIVILEGE | NETWORK ACCESS TO PRIVILEGED COMMANDS\nThe organization authorizes network access to [Assignment: organization-defined privileged commands] only for [Assignment: organization-defined compelling operational needs] and documents the rationale for such access in the operations security plan for the information system.',
	},
	'AC-6 (4)': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'LEAST PRIVILEGE | SEPARATE PROCESSING DOMAINS\nThe information system provides separate processing domains to enable finer-grained allocation of user privileges.',
	},
	'AC-6 (5)': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'LEAST PRIVILEGE | PRIVILEGED ACCOUNTS\nThe organization restricts privileged accounts on the information system to [Assignment: organization-defined personnel or roles].',
	},
	'AC-6 (6)': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'LEAST PRIVILEGE | PRIVILEGED ACCESS BY NON-ORGANIZATIONAL USERS\nThe organization prohibits privileged access to the information system by non-organizational users. Related control: IA-8.',
	},
	'AC-6 (7)': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'LEAST PRIVILEGE | REVIEW OF USER PRIVILEGES\nThe organization: \n(a) Reviews [Assignment: organization-defined frequency] the privileges assigned to [Assignment: organization-defined roles or classes of users] to validate the need for such privileges; and\n(b) Reassigns or removes privileges, if necessary, to correctly reflect organizational mission/business needs.',
	},
	'AC-6 (8)': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'LEAST PRIVILEGE | PRIVILEGE LEVELS FOR CODE EXECUTION\nThe information system prevents [Assignment: organization-defined software] from executing at higher privilege levels than users executing the software.',
	},
	'AC-6 (9)': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'LEAST PRIVILEGE | AUDITING USE OF PRIVILEGED FUNCTIONS\nThe information system audits the execution of privileged functions.',
	},
	'AC-6 (10)': {
		family: 'AC',
		name: 'Least Privilege',
		description:
			'LEAST PRIVILEGE | PROHIBIT NON-PRIVILEGED USERS FROM EXECUTING PRIVILEGED FUNCTIONS\nThe information system prevents non-privileged users from executing privileged functions to include disabling, circumventing, or altering implemented security safeguards/countermeasures.',
	},
	'AC-7': {
		family: 'AC',
		name: 'Unsuccessful Login Attempts',
		description:
			'(A) The information system enforces a limit of [Assignment: organization-defined number] consecutive invalid logon attempts by a user during a [Assignment: organization-defined time period].\n(B) The information system automatically [Selection: locks the account/node for an [Assignment: organization-defined time period]; locks the account/node until released by an administrator; delays next logon prompt according to [Assignment: organization-defined delay algorithm]] when the maximum number of unsuccessful attempts is exceeded.',
	},
	'AC-7 (1)': {
		family: 'AC',
		name: 'Unsuccessful Login Attempts',
		description: 'UNSUCCESSFUL LOGON ATTEMPTS | AUTOMATIC ACCOUNT LOCK',
	},
	'AC-7 (2)': {
		family: 'AC',
		name: 'Unsuccessful Login Attempts',
		description:
			'UNSUCCESSFUL LOGON ATTEMPTS | PURGE / WIPE MOBILE DEVICE\nThe information system purges/wipes information from [Assignment: organization-defined mobile devices] based on [Assignment: organization-defined purging/wiping requirements/techniques] after [Assignment: organization-defined number] consecutive, unsuccessful device logon attempts.',
	},
	'AC-8': {
		family: 'AC',
		name: 'System Use Notification',
		description:
			'(A) The information system displays to users [Assignment: organization-defined system use notification message or banner] before granting access to the system that provides privacy and security notices in accordance with the TBS Policy on the Use of Electronic Networks [Reference 5].\n(B) The information system retains the notification message or banner on the screen until users acknowledge the usage conditions and take explicit actions to log on to or further access the information system.\n(C) The information system for publicly accessible systems:\n(a) Displays system use information [Assignment: organization-defined conditions], before granting further access;\n(b) Displays references, if any, to monitoring, recording, or auditing that are consistent with privacy accommodations for such systems that generally prohibit those activities; and\n(c) Includes a description of the authorized uses of the system.',
	},
	'AC-9': {
		family: 'AC',
		name: 'Previous Logon (Access) Notification',
		description:
			'(A) The information system notifies the user, upon successful logon (access) to the system, of the date and time of the last logon (access).',
	},
	'AC-9 (1)': {
		family: 'AC',
		name: 'Previous Logon (Access) Notification',
		description:
			'PREVIOUS LOGON NOTIFICATION | UNSUCCESSFUL LOGONS\nThe information system notifies the user, upon successful logon/access, of the number of unsuccessful logon/access attempts since the last successful logon/access.',
	},
	'AC-9 (2)': {
		family: 'AC',
		name: 'Previous Logon (Access) Notification',
		description:
			'PREVIOUS LOGON NOTIFICATION | SUCCESSFUL / UNSUCCESSFUL LOGONS\nThe information system notifies the user of the number of [Selection: successful logons/accesses; unsuccessful logon/access attempts; both] during [Assignment: organization-defined time period].',
	},
	'AC-9 (3)': {
		family: 'AC',
		name: 'Previous Logon (Access) Notification',
		description:
			'PREVIOUS LOGON NOTIFICATION | NOTIFICATION OF ACCOUNT CHANGES\nThe information system notifies the user of changes to [Assignment: organization-defined security-related characteristics/parameters of the user’s account] during [Assignment: organization-defined time period].',
	},
	'AC-9 (4)': {
		family: 'AC',
		name: 'Previous Logon (Access) Notification',
		description:
			'PREVIOUS LOGON NOTIFICATION | ADDITIONAL LOGON INFORMATION\nThe information system notifies the user, upon successful logon (access), of the following additional information: [Assignment: organization-defined information to be included in addition to the date and time of the last logon (access)].',
	},
	'AC-10': {
		family: 'AC',
		name: 'Concurrent Session Control',
		description:
			'(A) The information system limits the number of concurrent sessions for each [Assignment: organization-defined account and/or account type] to [Assignment: organization-defined number].',
	},
	'AC-11': {
		family: 'AC',
		name: 'Session Lock',
		description:
			'(A) The information system prevents further access to the system by initiating a session lock after [Assignment: organization-defined time period] of inactivity or upon receiving a request from a user.\n(B) The information system retains the session lock until the user re-establishes access using established identification and authentication procedures.',
	},
	'AC-11 (1)': {
		family: 'AC',
		name: 'Session Lock',
		description:
			'SESSION LOCK | PATTERN-HIDING DISPLAYS\nThe information system conceals, via the session lock, information previously visible on the display with a publicly viewable image.',
	},
	'AC-12': {
		family: 'AC',
		name: 'Session Termination',
		description:
			'(A) The information system automatically terminates a user session after [Assignment: organization-defined conditions or trigger events requiring session disconnect].',
	},
	'AC-12 (1)': {
		family: 'AC',
		name: 'Session Termination',
		description:
			'SESSION TERMINATION | USER-INITIATED LOGOUTS / MESSAGE DISPLAYS\n(a) The information system provides a logout capability for user-initiated communications sessions whenever authentication is used to gain access to [Assignment: organization-defined information resources]; and\n(b) The information system displays an explicit logout message to users indicating the reliable termination of authenticated communications sessions.',
	},
	'AC-13': {
		family: 'AC',
		name: 'Supervision And Review — Access Control',
		description: '',
	},
	'AC-14': {
		family: 'AC',
		name: 'Permitted Actions Without Identification Or Authentication',
		description:
			'(A) The organization identifies [Assignment: organization-defined user actions] that can be performed on the information system without identification or authentication consistent with organizational missions/business functions.\n(B) The organization documents and provides supporting rationale in the security plan for the information system, user actions not requiring identification or authentication.',
	},
	'AC-15': {
		family: 'AC',
		name: 'Automated Marking',
		description: '',
	},
	'AC-16': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'(A) The organization provides the means to associate [Assignment: organization-defined types of security attributes] having [Assignment: organization-defined security attribute values] with information in storage, in process, and/or in transmission.\n(B) The organization ensures that the security attribute associations are made and retained with the information.\n(C) The organization establishes the permitted [Assignment: organization-defined security attributes] for [Assignment: organization-defined information systems].\n(D) The organization determines the permitted [Assignment: organization-defined values or ranges] for each of the established security attributes.',
	},
	'AC-16 (1)': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'SECURITY ATTRIBUTES | DYNAMIC ATTRIBUTE ASSOCIATION\nThe information system dynamically associates security attributes with [Assignment: organization-defined subjects and objects] in accordance with [Assignment: organization-defined security policies] as information is created and combined.',
	},
	'AC-16 (2)': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'SECURITY ATTRIBUTES | ATTRIBUTE VALUE CHANGES BY AUTHORIZED INDIVIDUALS\nThe information system provides authorized individuals (or processes acting on behalf of individuals) the capability to define or change the value of associated security attributes.',
	},
	'AC-16 (3)': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'SECURITY ATTRIBUTES | MAINTENANCE OF ATTRIBUTE ASSOCIATIONS BY INFORMATION SYSTEM\nThe information system maintains the association and integrity of [Assignment: organization-defined security attributes] to [Assignment: organization-defined subjects and objects].',
	},
	'AC-16 (4)': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'SECURITY ATTRIBUTES | ASSOCIATION OF ATTRIBUTES BY AUTHORIZED INDIVIDUALS\nThe information system supports the association of [Assignment: organization-defined security attributes] with [Assignment: organization-defined subjects and objects] by authorized individuals (or processes acting on behalf of individuals).',
	},
	'AC-16 (5)': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'SECURITY ATTRIBUTES | ATTRIBUTE DISPLAYS FOR OUTPUT DEVICES\nThe information system displays security attributes in human-readable form on each object that the system transmits to output devices to identify [Assignment: organization-defined special dissemination, handling, or distribution instructions] using [Assignment: organization-defined human-readable, standard naming conventions].',
	},
	'AC-16 (6)': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'SECURITY ATTRIBUTES | MAINTENANCE OF ATTRIBUTE ASSOCIATION BY ORGANIZATION\nThe organization allows personnel to associate, and maintain the association of [Assignment: organization-defined security attributes] with [Assignment: organization-defined subjects and objects] in accordance with [Assignment: organization-defined security policies].',
	},
	'AC-16 (7)': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'SECURITY ATTRIBUTES | CONSISTENT ATTRIBUTE INTERPRETATION\nThe organization provides a consistent interpretation of security attributes transmitted between distributed information system components.',
	},
	'AC-16 (8)': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'SECURITY ATTRIBUTES | ASSOCIATION TECHNIQUES / TECHNOLOGIES\nThe information system implements [Assignment: organization-defined techniques or technologies] with [Assignment: organization-defined level of assurance] in associating security attributes to information.',
	},
	'AC-16 (9)': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'SECURITY ATTRIBUTES | ATTRIBUTE REASSIGNMENT\nThe organization ensures that security attributes associated with information are reassigned only via re-grading mechanisms validated using [Assignment: organization-defined techniques or procedures].',
	},
	'AC-16 (10)': {
		family: 'AC',
		name: 'Security Attributes',
		description:
			'SECURITY ATTRIBUTES | ATTRIBUTE CONFIGURATION BY AUTHORIZED INDIVIDUALS\nThe information system provides authorized individuals the capability to define or change the type and value of security attributes available for association with subjects and objects.',
	},
	'AC-17': {
		family: 'AC',
		name: 'Remote Access',
		description:
			'(A) The organization establishes and documents usage restrictions, configuration/connection requirements, and implementation guidance for each type of remote access allowed.\n(B) The organization authorizes remote access to the information system prior to allowing such connections.\n(AA) The organization ensures that all employees working off site safeguard information as per the minimum requirements in accordance with the TBS Operational Security Standard on Physical Security [Reference 6].',
	},
	'AC-17 (1)': {
		family: 'AC',
		name: 'Remote Access',
		description:
			'REMOTE ACCESS | AUTOMATED MONITORING / CONTROL\nThe information system monitors and controls remote access methods.',
	},
	'AC-17 (2)': {
		family: 'AC',
		name: 'Remote Access',
		description:
			'REMOTE ACCESS | PROTECTION OF CONFIDENTIALITY / INTEGRITY USING ENCRYPTION\nThe information system implements cryptographic mechanisms to protect the confidentiality and integrity of remote access sessions. The cryptography must be compliant with the requirements of SC-13.',
	},
	'AC-17 (3)': {
		family: 'AC',
		name: 'Remote Access',
		description:
			'REMOTE ACCESS | MANAGED ACCESS CONTROL POINTS\nThe information system routes all remote accesses through [Assignment: organization-defined number] managed network access control points.',
	},
	'AC-17 (4)': {
		family: 'AC',
		name: 'Remote Access',
		description:
			'REMOTE ACCESS | PRIVILEGED COMMANDS / ACCESS\n(a) The organization authorizes the execution of privileged commands and access to security-relevant information via remote access only for [Assignment: organization-defined needs]; and\n(b) The organization documents the rationale for such access in the security plan for the information system.',
	},
	'AC-17 (5)': {
		family: 'AC',
		name: 'Remote Access',
		description: 'REMOTE ACCESS | MONITORING FOR UNAUTHORIZED CONNECTIONS',
	},
	'AC-17 (6)': {
		family: 'AC',
		name: 'Remote Access',
		description:
			'REMOTE ACCESS | PROTECTION OF INFORMATION\nThe organization ensures that users protect information about remote access mechanisms from unauthorized use and disclosure.',
	},
	'AC-17 (7)': {
		family: 'AC',
		name: 'Remote Access',
		description:
			'REMOTE ACCESS | ADDITIONAL PROTECTION FOR SECURITY FUNCTION ACCESS',
	},
	'AC-17 (8)': {
		family: 'AC',
		name: 'Remote Access',
		description: 'REMOTE ACCESS | DISABLE NON-SECURE NETWORK PROTOCOLS',
	},
	'AC-17 (9)': {
		family: 'AC',
		name: 'Remote Access',
		description:
			'REMOTE ACCESS | DISCONNECT / DISABLE ACCESS\nThe organization provides the capability to expeditiously disconnect or disable remote access to the information system within [Assignment: organization-defined time period].',
	},
	'AC-17 (100)': {
		family: 'AC',
		name: 'Remote Access',
		description:
			'Remote access to privileged accounts is performed on dedicated management consoles governed entirely by the system’s security policies and used exclusively for this purpose (e.g. Internet access not allowed).',
	},
	'AC-18': {
		family: 'AC',
		name: 'Wireless Access',
		description:
			'(A) The organization establishes usage restrictions, configuration/connection requirements, and implementation guidance for wireless access.\n(B) The organization authorizes wireless access to the information system prior to allowing such connections.',
	},
	'AC-18 (1)': {
		family: 'AC',
		name: 'Wireless Access',
		description:
			'WIRELESS ACCESS | AUTHENTICATION AND ENCRYPTION\nThe information system protects wireless access to the system using authentication of [Selection (one or more): users; devices] and encryption.',
	},
	'AC-18 (2)': {
		family: 'AC',
		name: 'Wireless Access',
		description: 'WIRELESS ACCESS | MONITORING UNAUTHORIZED CONNECTIONS',
	},
	'AC-18 (3)': {
		family: 'AC',
		name: 'Wireless Access',
		description:
			'WIRELESS ACCESS | DISABLE WIRELESS NETWORKING\nThe organization disables, when not intended for use, wireless networking capabilities internally embedded within information system components prior to issuance and deployment.',
	},
	'AC-18 (4)': {
		family: 'AC',
		name: 'Wireless Access',
		description:
			'WIRELESS ACCESS | RESTRICT CONFIGURATIONS BY USERS\nThe organization identifies and explicitly authorizes users allowed to independently configure wireless networking capabilities.',
	},
	'AC-18 (5)': {
		family: 'AC',
		name: 'Wireless Access',
		description:
			'WIRELESS ACCESS | ANTENNAS / TRANSMISSION POWER LEVELS\nThe organization selects radio antennas and calibrates transmission power levels to reduce the probability that usable signals can be received outside of organization-controlled boundaries.',
	},
	'AC-19': {
		family: 'AC',
		name: 'Access Control For Mobile Devices',
		description:
			'(A) The organization establishes usage restrictions, configuration requirements, connection requirements, and implementation guidance for organization-controlled mobile devices.\n(B) The organization authorizes the connection of mobile devices to organizational information systems.',
	},
	'AC-19 (1)': {
		family: 'AC',
		name: 'Access Control For Mobile Devices',
		description: 'ACCESS CONTROL FOR MOBILE DEVICES | USE OF MOBILE DEVICES',
	},
	'AC-19 (2)': {
		family: 'AC',
		name: 'Access Control For Mobile Devices',
		description:
			'ACCESS CONTROL FOR MOBILE DEVICES | USE OF PERSONALLY OWNED MOBILE DEVICES',
	},
	'AC-19 (3)': {
		family: 'AC',
		name: 'Access Control For Mobile Devices',
		description:
			'ACCESS CONTROL FOR MOBILE DEVICES | USE OF MOBILE DEVICES WITH NO IDENTIFIABLE OWNER',
	},
	'AC-19 (4)': {
		family: 'AC',
		name: 'Access Control For Mobile Devices',
		description:
			'ACCESS CONTROL FOR MOBILE DEVICES | RESTRICTIONS FOR CLASSIFIED INFORMATION\n(a) The organization prohibits the use of unclassified mobile devices in facilities containing information systems processing, storing, or transmitting classified information unless specifically permitted by the authorizing official; and\n(b) The organization enforces the following restrictions on individuals permitted by the authorizing official to use unclassified mobile devices in facilities containing information systems processing, storing, or transmitting classified information:\n- Connection of unclassified mobile devices to classified information systems is prohibited;\n- Connection of unclassified mobile devices to unclassified information systems requires approval from the authorizing official;\n- Use of internal or external modems or wireless interfaces within the unclassified mobile devices is prohibited (i.e. turned off); and\n- Unclassified mobile devices and the information stored on those devices are subject to random reviews and inspections by [Assignment: organization-defined security officials], and if classified information is found, the incident handling policy is followed.\n- Restricts the connection of classified mobile devices to classified information systems in accordance with [Assignment: organization-defined security policies].',
	},
	'AC-19 (5)': {
		family: 'AC',
		name: 'Access Control For Mobile Devices',
		description:
			'ACCESS CONTROL FOR MOBILE DEVICES | FULL DEVICE / CONTAINER-BASED ENCRYPTION\nThe organization employs [Selection: full-device encryption; container encryption] to protect the confidentiality and integrity of information on [Assignment: organization-defined mobile devices].',
	},
	'AC-19 (100)': {
		family: 'AC',
		name: 'Access Control For Mobile Devices',
		description:
			'The organization ensures that users turn off wireless devices with a voice transmission capability or physically disable the microphone when attending a meeting at which Protected B, Protected C or classified information is being shared as per the TBS Operational Security Standard - Management of Information Technology Security [Reference 7].',
	},
	'AC-20': {
		family: 'AC',
		name: 'Use Of External Information Systems',
		description:
			'(A) The organization establishes terms and conditions, consistent with any trust relationships established with other organizations owning, operating, and/or maintaining external information systems, allowing authorized individuals to access the information system from external information systems.\n(B) The organization establishes terms and conditions, consistent with any trust relationships established with other organizations owning, operating, and/or maintaining external information systems, allowing authorized individuals to process, store, or transmit organization-controlled information using external information systems.',
	},
	'AC-20 (1)': {
		family: 'AC',
		name: 'Use Of External Information Systems',
		description:
			'USE OF EXTERNAL INFORMATION SYSTEMS | LIMITS ON AUTHORIZED USE\nThe organization permits authorized individuals to use an external information system to access the information system or to process, store, or transmit organization-controlled information only when the organization:\n(a) Verifies the implementation of required security controls on the external system as specified in the organization’s information security policy and security plan; or\n(b) Retains approved information system connection or processing agreements with the organizational entity hosting the external information system.',
	},
	'AC-20 (2)': {
		family: 'AC',
		name: 'Use Of External Information Systems',
		description:
			'USE OF EXTERNAL INFORMATION SYSTEMS | PORTABLE STORAGE DEVICES\nThe organization [Selection: restricts; prohibits] the use of organization-controlled mobile devices by authorized individuals on external information systems.',
	},
	'AC-20 (3)': {
		family: 'AC',
		name: 'Use Of External Information Systems',
		description:
			'USE OF EXTERNAL INFORMATION SYSTEMS | NON-ORGANIZATIONALLY OWNED SYSTEMS / COMPONENTS / DEVICES\nThe organization [Selection: restricts; prohibits] the use of non-organizationally owned information systems, system components, or devices to process, store, or transmit organizational information.',
	},
	'AC-20 (4)': {
		family: 'AC',
		name: 'Use Of External Information Systems',
		description:
			'USE OF EXTERNAL INFORMATION SYSTEMS | NETWORK ACCESSIBLE STORAGE DEVICES\nThe organization prohibits the use of [Assignment: organization-defined network accessible storage devices] in external information systems.',
	},
	'AC-21': {
		family: 'AC',
		name: 'User-Based Collaboration And Information Sharing',
		description:
			'(A) The organization facilitates information sharing by enabling authorized users to determine if access authorizations assigned to the sharing partner match the access restrictions on the information for [Assignment: organization-defined information sharing circumstances where user discretion is required]; and\n(B) The organization employs [Assignment: organization-defined automated mechanisms or manual processes] to assist users in making information sharing/collaboration decisions.',
	},
	'AC-21 (1)': {
		family: 'AC',
		name: 'User-Based Collaboration And Information Sharing',
		description:
			'INFORMATION SHARING | AUTOMATED DECISION SUPPORT\nThe information system enforces information-sharing decisions by authorized users based on access authorizations of sharing partners and access restrictions on information to be shared.',
	},
	'AC-21 (2)': {
		family: 'AC',
		name: 'User-Based Collaboration And Information Sharing',
		description:
			'INFORMATION SHARING | INFORMATION SEARCH AND RETRIEVAL\nThe information system implements information search and retrieval services that enforce [Assignment: organization-defined information sharing restrictions].',
	},
	'AC-21 (100)': {
		family: 'AC',
		name: 'User-Based Collaboration And Information Sharing',
		description:
			'The organization ensures, through written agreements, the appropriate safeguarding of sensitive information shared with other governments and organizations.',
	},
	'AC-22': {
		family: 'AC',
		name: 'Publicly Accessible Content',
		description:
			'(A) The organization designates individuals authorized to post information onto a publicly accessible information system.\n(B) The organization trains authorized individuals to ensure that publicly accessible information does not contain confidentially sensitive information.\n(C) The organization reviews the proposed content of information prior to posting onto the publicly accessible information system to ensure that confidentially sensitive information is not included.\n(D) The organization reviews the content on the publicly accessible information system for confidentially sensitive information [Assignment: organization-defined frequency] and removes such information, if discovered.',
	},
	'AC-23': {
		family: 'AC',
		name: 'Data Mining Protection',
		description:
			'(A) The organization employs [Assignment: organization-defined data mining prevention and detection techniques] for [Assignment: organization-defined data storage objects] to adequately detect and protect against data mining.',
	},
	'AC-24': {
		family: 'AC',
		name: 'Access Control Decisions',
		description:
			'(A) The organization establishes procedures to ensure [Assignment: organization-defined access control decisions] are applied to each access request prior to access enforcement.',
	},
	'AC-24 (1)': {
		family: 'AC',
		name: 'Access Control Decisions',
		description:
			'ACCESS CONTROL DECISIONS | TRANSMIT ACCESS AUTHORIZATION INFORMATION\nThe information system transmits [Assignment: organization-defined access authorization information] using [Assignment: organization-defined security safeguards] to [Assignment: organization-defined information systems] that enforce access control decisions.',
	},
	'AC-24 (2)': {
		family: 'AC',
		name: 'Access Control Decisions',
		description:
			'ACCESS CONTROL DECISIONS | NO USER OR PROCESS IDENTITY\nThe information system enforces access control decisions based on [Assignment: organization-defined security attributes] that do not include the identity of the user or process acting on behalf of the user.',
	},
	'AC-25': {
		family: 'AC',
		name: 'Reference Monitor',
		description:
			'(A) The information system implements a reference monitor for [Assignment: organization-defined access control policies] that is tamperproof, always invoked, and small enough to be subject to analysis and testing, the completeness of which can be assured.',
	},
	'AT-1': {
		family: 'AT',
		name: 'Security Awareness And Training Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A security awareness and training policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b)  Procedures to facilitate the implementation of the security awareness and training policy and associated security awareness and training controls.\n(B) The organization reviews and updates the current:\n(a) Security awareness and training policy [Assignment: organization-defined frequency]; and\n(b)  Security awareness and training procedures [Assignment: organization-defined frequency].',
	},
	'AT-2': {
		family: 'AT',
		name: 'Security Awareness',
		description:
			'(A) The organization provides basic security awareness training to information system users (including managers, senior executives, and contractors):\n(a) As part of initial training for new users;\n(b) When required by information system changes; and\n(c) [Assignment: organization-defined frequency] thereafter.',
	},
	'AT-2 (1)': {
		family: 'AT',
		name: 'Security Awareness',
		description:
			'SECURITY AWARENESS | PRACTICAL EXERCISES\nThe organization includes practical exercises in security awareness training that simulate actual cyber-attacks.\nSupplemental Guidance: Practical exercises may include, for example, no-notice social engineering attempts to collect information, gain unauthorized access, or simulate the adverse impact of opening malicious email attachments or invoking, via spear phishing attacks, malicious web links. Related controls: CA-2, CA-7, CP-4, IR-3.',
	},
	'AT-2 (2)': {
		family: 'AT',
		name: 'Security Awareness',
		description:
			'SECURITY AWARENESS | INSIDER THREAT\nThe organization includes security awareness training on recognizing and reporting potential indicators of insider threat.\nSupplemental Guidance: Potential indicators and possible precursors of insider threat can include behaviours such as inordinate, long-term job dissatisfaction, attempts to gain access to information not required for job performance, unexplained access to financial resources, bullying or sexual harassment of fellow employees, workplace violence, and other serious violations of organizational policies, procedures, directives, rules, or practices. Security awareness training includes how to communicate employee and management concerns regarding potential indicators of insider threat through appropriate organizational channels in accordance with established organizational policies and procedures. Related controls: PL-4, PS-3, PS-6.',
	},
	'AT-3': {
		family: 'AT',
		name: 'Role Based Security Training',
		description:
			'(A) The organization provides role-based security training to personnel with assigned security roles and responsibilities:\n(a) Before authorizing access to the information system or performing assigned duties;\n(b) When required by information system changes; and\n(c) [Assignment: organization-defined frequency] thereafter.',
	},
	'AT-3 (1)': {
		family: 'AT',
		name: 'Role Based Security Training',
		description:
			'SECURITY TRAINING | ENVIRONMENTAL CONTROLS\nThe organization provides [Assignment: organization-defined personnel or roles] with initial and [Assignment: organization-defined frequency] training in the employment and operation of environmental controls.\nSupplemental Guidance: Environmental controls include, for example, fire suppression and detection devices/systems, sprinkler systems, handheld fire extinguishers, fixed fire hoses, smoke detectors, temperature/humidity, Heating, Ventilation and Air Conditioning (HVAC), and power within the facility. Organizations identify personnel with specific roles and responsibilities associated with environmental controls requiring specialized training. Related controls: PE-1, PE-13, PE-14, PE-15.',
	},
	'AT-3 (2)': {
		family: 'AT',
		name: 'Role Based Security Training',
		description:
			'SECURITY TRAINING | PHYSICAL SECURITY CONTROLS\nThe organization provides [Assignment: organization-defined personnel or roles] with initial and [Assignment: organization-defined frequency] training in the employment and operation of physical security controls.\nSupplemental Guidance: Physical security controls include, for example, physical access control devices, physical intrusion alarms, monitoring/surveillance equipment, and security guards (deployment and operating procedures). Organizations identify personnel with specific roles and responsibilities associated with physical security controls requiring specialized training. Related controls: PE-2, PE-3, PE-4, PE-5.',
	},
	'AT-3 (3)': {
		family: 'AT',
		name: 'Role Based Security Training',
		description:
			'SECURITY TRAINING | PRACTICAL EXERCISES\nThe organization includes practical exercises in security training that reinforce training objectives.\nSupplemental Guidance: Practical exercises may include, for example, security training for software developers that includes simulated cyber-attacks exploiting common software vulnerabilities (e.g., buffer overflows), or spear/whale phishing attacks targeted at senior leaders/executives. These types of practical exercises help developers better understand the effects of such vulnerabilities and appreciate the need for security coding standards and processes.',
	},
	'AT-3 (4)': {
		family: 'AT',
		name: 'Role Based Security Training',
		description:
			'SECURITY TRAINING | SUSPICIOUS COMMUNICATIONS AND ANOMALOUS SYSTEM BEHAVIOUR\nThe organization provides training to its personnel on [Assignment: organization-defined indicators of malicious code] to recognize suspicious communications and anomalous behaviour in organizational information systems.\nSupplemental Guidance: A well-trained workforce provides another organizational safeguard that can be employed as part of a defence-in-depth strategy to protect organizations against malicious code coming in to organizations via email or web applications. Personnel are trained to look for indications of potentially suspicious email (e.g., receiving an unexpected email, receiving an email containing strange or poor grammar, or receiving an email from an unfamiliar sender but who appears to be from a known sponsor or contractor). Personnel are also trained on how to respond to such suspicious email or web communications (e.g., not opening attachments, not clicking on embedded web links, and checking the source of email addresses). For this process to work effectively, all organizational personnel are trained and made aware of what constitutes suspicious communications. Training personnel on how to recognize anomalous behaviours in organizational information systems can potentially provide early warning for the presence of malicious code. Recognition of such anomalous behaviour by organizational personnel can supplement automated malicious code detection and protection tools and systems employed by organizations.',
	},
	'AT-4': {
		family: 'AT',
		name: 'Security Training Records',
		description:
			'(A) The organization documents and monitors individual information system security training activities including basic security awareness training and specific information system security training; and\n(B) The organization retains individual training records for [Assignment: organization-defined time period].',
	},
	'AT-5': {
		family: 'AT',
		name: 'Contacts With Security Groups And Associations',
		description: '',
	},
	'AU-1': {
		family: 'AU',
		name: 'Audit And Accountability Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) An audit and accountability policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b)  Procedures to facilitate the implementation of the audit and accountability policy and associated audit and accountability controls.\n(B) The organization reviews and updates the current:\n(a) Audit and accountability policy [Assignment: organization-defined frequency]; and\n(b) Audit and accountability procedures [Assignment: organization-defined frequency].',
	},
	'AU-2': {
		family: 'AU',
		name: 'Auditable Events',
		description:
			'(A) The organization determines that the information system is capable of auditing the following events: [Assignment: organization-defined auditable events].\n(B) The organization coordinates the security audit function with other organizational entities requiring audit-related information to enhance mutual support and to help guide the selection of auditable events.\n(C) The organization provides a rationale for why the auditable events are deemed to be adequate to support after-the-fact investigations of security incidents.\n(D) The organization determines that the following events are to be audited within the information system: [Assignment: organization-defined audited events (the subset of the auditable events defined in AU-2 a.) along with the frequency of (or situation requiring) auditing for each identified event].',
	},
	'AU-2 (1)': {
		family: 'AU',
		name: 'Auditable Events',
		description:
			'AUDIT EVENTS | COMPILATION OF AUDIT RECORDS FROM MULTIPLE SOURCES',
	},
	'AU-2 (2)': {
		family: 'AU',
		name: 'Auditable Events',
		description: 'AUDIT EVENTS | SELECTION OF AUDIT EVENTS BY COMPONENT',
	},
	'AU-2 (3)': {
		family: 'AU',
		name: 'Auditable Events',
		description:
			'AUDIT EVENTS | REVIEWS AND UPDATES\nThe organization reviews and updates the audited events [Assignment: organization-defined frequency].',
	},
	'AU-2 (4)': {
		family: 'AU',
		name: 'Auditable Events',
		description: 'AUDIT EVENTS | PRIVILEGED FUNCTIONS',
	},
	'AU-3': {
		family: 'AU',
		name: 'Content Of Audit Records',
		description:
			'(A) The information system generates audit records containing information that establishes what type of event occurred, when the event occurred, where the event occurred, the source of the event, the outcome of the event, and the identity of any individuals or subjects associated with the event.',
	},
	'AU-3 (1)': {
		family: 'AU',
		name: 'Content Of Audit Records',
		description:
			'CONTENT OF AUDIT RECORDS | ADDITIONAL AUDIT INFORMATION\nThe information system generates audit records containing the following additional information: [Assignment: organization-defined additional, more detailed information].',
	},
	'AU-3 (2)': {
		family: 'AU',
		name: 'Content Of Audit Records',
		description:
			'CONTENT OF AUDIT RECORDS | CENTRALIZED MANAGEMENT OF PLANNED AUDIT RECORD CONTENT\nThe information system provides centralized management and configuration of the content to be captured in audit records generated by [Assignment: organization-defined information system components].',
	},
	'AU-4': {
		family: 'AU',
		name: 'Audit Storage Capacity',
		description:
			'(A) The organization allocates audit record storage capacity in accordance with [Assignment: organization-defined audit record storage requirements].',
	},
	'AU-4 (1)': {
		family: 'AU',
		name: 'Audit Storage Capacity',
		description:
			'AUDIT STORAGE CAPACITY | TRANSFER TO ALTERNATE STORAGE\nThe information system off-loads audit records [Assignment: organization-defined frequency] onto a different system or media than the system being audited.',
	},
	'AU-5': {
		family: 'AU',
		name: 'Response To Audit Processing Failures',
		description:
			'(A) The information system alerts [Assignment: organization-defined personnel or roles] in the event of an audit processing failure; and\n(B) The information system takes the following additional actions: [Assignment: organization-defined actions to be taken (e.g., shut down information system, overwrite oldest audit records, stop generating audit records)].',
	},
	'AU-5 (1)': {
		family: 'AU',
		name: 'Response To Audit Processing Failures',
		description:
			'RESPONSE TO AUDIT PROCESSING FAILURES | AUDIT STORAGE CAPACITY\nThe information system provides a warning to [Assignment: organization-defined personnel, roles, and/or locations] within [Assignment: organization-defined time period] when allocated audit record storage volume reaches [Assignment: organization-defined percentage] of repository maximum audit record storage capacity.',
	},
	'AU-5 (2)': {
		family: 'AU',
		name: 'Response To Audit Processing Failures',
		description:
			'RESPONSE TO AUDIT PROCESSING FAILURES | REAL-TIME ALERTS\nThe information system provides an alert in [Assignment: organization-defined real-time period] to [Assignment: organization-defined personnel, roles, and/or locations] when the following audit failure events occur: [Assignment: organization-defined audit failure events requiring real-time alerts].',
	},
	'AU-5 (3)': {
		family: 'AU',
		name: 'Response To Audit Processing Failures',
		description:
			'RESPONSE TO AUDIT PROCESSING FAILURES | CONFIGURABLE TRAFFIC VOLUME THRESHOLDS\nThe information system enforces configurable network communications traffic volume thresholds reflecting limits on auditing capacity and [Selection: rejects; delays] network traffic above those thresholds.',
	},
	'AU-5 (4)': {
		family: 'AU',
		name: 'Response To Audit Processing Failures',
		description:
			'RESPONSE TO AUDIT PROCESSING FAILURES | SHUTDOWN ON FAILURE\nThe information system invokes a [Selection: full system shutdown; partial system shutdown; degraded operational mode with limited mission/business functionality available] in the event of [Assignment: organization-defined audit failures], unless an alternate audit capability exists.',
	},
	'AU-6': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'(A) The organization reviews and analyzes information system audit records [Assignment: organization-defined frequency] for indications of [Assignment: organization-defined inappropriate or unusual activity].\n(B) The organization reports findings to [Assignment: organization-defined personnel or roles].',
	},
	'AU-6 (1)': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'AUDIT REVIEW, ANALYSIS, AND REPORTING | PROCESS INTEGRATION\nThe organization employs automated mechanisms to integrate audit review, analysis, and reporting processes to support organizational processes for investigation and response to suspicious activities.',
	},
	'AU-6 (2)': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'AUDIT REVIEW, ANALYSIS, AND REPORTING | AUTOMATED SECURITY ALERTS',
	},
	'AU-6 (3)': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'AUDIT REVIEW, ANALYSIS, AND REPORTING | CORRELATE AUDIT REPOSITORIES\nThe organization analyzes and correlates audit records across different repositories to gain organization-wide situational awareness.',
	},
	'AU-6 (4)': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'AUDIT REVIEW, ANALYSIS, AND REPORTING | CENTRAL REVIEW AND ANALYSIS\nThe information system provides the capability to centrally review and analyze audit records from multiple components within the system.',
	},
	'AU-6 (5)': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'AUDIT REVIEW, ANALYSIS, AND REPORTING | INTEGRATION / SCANNING AND MONITORING CAPABILITIES\nThe organization integrates analysis of audit records with analysis of [Selection (one or more): vulnerability scanning information; performance data; information system monitoring information; [Assignment: organization-defined data/information collected from other sources]] to further enhance the ability to identify inappropriate or unusual activity.',
	},
	'AU-6 (6)': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'AUDIT REVIEW, ANALYSIS, AND REPORTING | CORRELATION WITH PHYSICAL MONITORING\nThe organization correlates information from audit records with information obtained from monitoring physical access to further enhance the ability to identify suspicious, inappropriate, unusual, or malevolent activity.',
	},
	'AU-6 (7)': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'AUDIT REVIEW, ANALYSIS, AND REPORTING | PERMITTED ACTIONS\nThe organization specifies the permitted actions for each [Selection (one or more): information system process; role; user] associated with the review, analysis, and reporting of audit information.',
	},
	'AU-6 (8)': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'AUDIT REVIEW, ANALYSIS, AND REPORTING | FULL TEXT ANALYSIS OF PRIVILEGED COMMANDS\nThe organization performs a full text analysis of audited privileged commands in a physically distinct component or subsystem of the information system, or other information system that is dedicated to that analysis.',
	},
	'AU-6 (9)': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'AUDIT REVIEW, ANALYSIS, AND REPORTING | CORRELATION WITH INFORMATION FROM NONTECHNICAL SOURCES\nThe organization correlates information from nontechnical sources with audit information to enhance organization-wide situational awareness.',
	},
	'AU-6 (10)': {
		family: 'AU',
		name: 'Audit Review, Analysis, And Reporting',
		description:
			'AUDIT REVIEW, ANALYSIS, AND REPORTING | AUDIT LEVEL ADJUSTMENT\nThe organization adjusts the level of audit review, analysis, and reporting within the information system when there is a change in risk based on law enforcement information, intelligence information, or other credible sources of information.',
	},
	'AU-7': {
		family: 'AU',
		name: 'Audit Reduction And Report Generation',
		description:
			'(A) The information system provides an audit reduction and report generation capability that supports on-demand audit review, analysis, and reporting requirements and after-the-fact investigations of security incidents.\n(B) The information system provides an audit reduction and report generation capability that does not alter the original content or time ordering of audit records.',
	},
	'AU-7 (1)': {
		family: 'AU',
		name: 'Audit Reduction And Report Generation',
		description:
			'AUDIT REDUCTION AND REPORT GENERATION | AUTOMATIC PROCESSING\nThe information system provides the capability to process audit records for events of interest based on [Assignment: organization-defined audit fields within audit records].',
	},
	'AU-7 (2)': {
		family: 'AU',
		name: 'Audit Reduction And Report Generation',
		description:
			'AUDIT REDUCTION AND REPORT GENERATION | AUTOMATIC SORT AND SEARCH\nThe information system provides the capability to sort and search audit records for events of interest based on the content of [Assignment: organization-defined audit fields within audit records].',
	},
	'AU-8': {
		family: 'AU',
		name: 'Time Stamps',
		description:
			'(A) The information system uses internal system clocks to generate time stamps for audit records.\n(B) The information system records time stamps for audit records that can be mapped to Coordinated Universal Time (UTC) or Greenwich Mean Time (GMT) and meets [Assignment: organization-defined granularity of time measurement].',
	},
	'AU-8 (1)': {
		family: 'AU',
		name: 'Time Stamps',
		description:
			'TIME STAMPS | SYNCHRONIZATION WITH AUTHORITATIVE TIME SOURCE\n(a) The information system compares the internal information system clocks [Assignment: organization-defined frequency] with [Assignment: organization-defined authoritative time source]; and\n(b) The information system synchronizes the internal system clocks to the authoritative time source when the time difference is greater than [Assignment: organization-defined time period].',
	},
	'AU-8 (2)': {
		family: 'AU',
		name: 'Time Stamps',
		description:
			'TIME STAMPS | SECONDARY AUTHORITATIVE TIME SOURCE\nThe information system identifies a secondary authoritative time source that is located in a different geographic region than the primary authoritative time source.',
	},
	'AU-9': {
		family: 'AU',
		name: 'Protection Of Audit Information',
		description:
			'(A) The information system protects audit information and audit tools from unauthorized access, modification, and deletion.',
	},
	'AU-9 (1)': {
		family: 'AU',
		name: 'Protection Of Audit Information',
		description:
			'PROTECTION OF AUDIT INFORMATION | HARDWARE WRITE-ONCE MEDIA\nThe information system writes audit trails to hardware-enforced, write-once media.',
	},
	'AU-9 (2)': {
		family: 'AU',
		name: 'Protection Of Audit Information',
		description:
			'PROTECTION OF AUDIT INFORMATION | AUDIT BACKUP ON SEPARATE PHYSICAL SYSTEMS / COMPONENTS\nThe information system backs up audit records [Assignment: organization-defined frequency] onto a physically different system or system component than the system or component being audited.',
	},
	'AU-9 (3)': {
		family: 'AU',
		name: 'Protection Of Audit Information',
		description:
			'PROTECTION OF AUDIT INFORMATION | CRYPTOGRAPHIC PROTECTION\nThe information system implements cryptographic mechanisms to protect the integrity of audit information and audit tools.',
	},
	'AU-9 (4)': {
		family: 'AU',
		name: 'Protection Of Audit Information',
		description:
			'PROTECTION OF AUDIT INFORMATION | ACCESS BY SUBSET OF PRIVILEGED USERS\nThe organization authorizes access to management of audit functionality to only [Assignment: organization-defined subset of privileged users].',
	},
	'AU-9 (5)': {
		family: 'AU',
		name: 'Protection Of Audit Information',
		description:
			'PROTECTION OF AUDIT INFORMATION | DUAL AUTHORIZATION\nThe organization enforces dual authorization for [Selection (one or more): movement; deletion] of [Assignment: organization-defined audit information].',
	},
	'AU-9 (6)': {
		family: 'AU',
		name: 'Protection Of Audit Information',
		description:
			'PROTECTION OF AUDIT INFORMATION | READ ONLY ACCESS\nThe organization authorizes read-only access to audit information to [Assignment: organization-defined subset of privileged users].',
	},
	'AU-10': {
		family: 'AU',
		name: 'Non-Repudiation',
		description:
			'(A) The information system protects against an individual (or process acting on behalf of an individual) falsely denying having performed [Assignment: organization-defined actions to be covered by non-repudiation].',
	},
	'AU-10 (1)': {
		family: 'AU',
		name: 'Non-Repudiation',
		description:
			'NON-REPUDIATION | ASSOCIATION OF IDENTITIES\n(a) The information system binds the identity of the information producer with the information to [Assignment: organization-defined strength of binding]; and\n(b) The information system provides the means for authorized individuals to determine the identity of the producer of the information.',
	},
	'AU-10 (2)': {
		family: 'AU',
		name: 'Non-Repudiation',
		description:
			'NON-REPUDIATION | VALIDATE BINDING OF INFORMATION PRODUCER IDENTITY\n(a) The information system validates the binding of the information producer identity to the information at [Assignment: organization-defined frequency]; and\n(b) The information system performs [Assignment: organization-defined actions] in the event of a validation error.',
	},
	'AU-10 (3)': {
		family: 'AU',
		name: 'Non-Repudiation',
		description:
			'NON-REPUDIATION | CHAIN OF CUSTODY\nThe information system maintains reviewer/releaser identity and credentials within the established chain of custody for all information reviewed or released.',
	},
	'AU-10 (4)': {
		family: 'AU',
		name: 'Non-Repudiation',
		description:
			'NON-REPUDIATION | VALIDATE BINDING OF INFORMATION REVIEWER IDENTITY\n(a) The information system validates the binding of the information reviewer identity to the information at the transfer or release points prior to release/transfer between [Assignment: organization-defined security domains]; and\n(b) The information system performs [Assignment: organization-defined actions] in the event of a validation error.',
	},
	'AU-10 (5)': {
		family: 'AU',
		name: 'Non-Repudiation',
		description: 'NON-REPUDIATION | DIGITAL SIGNATURES',
	},
	'AU-11': {
		family: 'AU',
		name: 'Audit Record Retention',
		description:
			'(A) The organization retains audit records for [Assignment: organization-defined time period consistent with records retention policy] to provide support for after-the-fact investigations of security incidents and to meet regulatory and organizational information retention requirements.',
	},
	'AU-11 (1)': {
		family: 'AU',
		name: 'Audit Record Retention',
		description:
			'AUDIT RECORD RETENTION | LONG-TERM RETRIEVAL CAPABILITY\nThe organization employs [Assignment: organization-defined measures] to ensure that long-term audit records generated by the information system can be retrieved.',
	},
	'AU-12': {
		family: 'AU',
		name: 'Audit Generation',
		description:
			'(A) The information system provides audit record generation capability for the auditable events defined in AU-2 a. at [Assignment: organization-defined information system components].\n(B) The information system allows [Assignment: organization-defined personnel or roles] to select which auditable events are to be audited by specific components of the information system.\n(C) The information system generates audit records for the events defined in AU-2 d. with the content defined in AU-3.',
	},
	'AU-12 (1)': {
		family: 'AU',
		name: 'Audit Generation',
		description:
			'AUDIT GENERATION | SYSTEM-WIDE / TIME-CORRELATED AUDIT TRAIL\nThe information system compiles audit records from [Assignment: organization-defined information system components] into a system-wide (logical or physical) audit trail that is time-correlated to within [Assignment: organization-defined level of tolerance for relationship between time stamps of individual records in the audit trail].',
	},
	'AU-12 (2)': {
		family: 'AU',
		name: 'Audit Generation',
		description:
			'AUDIT GENERATION | STANDARDIZED FORMATS\nThe information system produces a system-wide (logical or physical) audit trail composed of audit records in a standardized format.',
	},
	'AU-12 (3)': {
		family: 'AU',
		name: 'Audit Generation',
		description:
			'AUDIT GENERATION | CHANGES BY AUTHORIZED INDIVIDUALS\nThe information system provides the capability for [Assignment: organization-defined individuals or roles] to change the auditing to be performed on [Assignment: organization-defined information system components] based on [Assignment: organization-defined selectable event criteria] within [Assignment: organization-defined time thresholds].',
	},
	'AU-13': {
		family: 'AU',
		name: 'Monitoring For Information Disclosure',
		description:
			'(A) The organization monitors [Assignment: organization-defined open source information and/or information sites] [Assignment: organization-defined frequency] for evidence of unauthorized disclosure of organizational information.',
	},
	'AU-13 (1)': {
		family: 'AU',
		name: 'Monitoring For Information Disclosure',
		description:
			'MONITORING FOR INFORMATION DISCLOSURE | USE OF AUTOMATED TOOLS\nThe organization employs automated mechanisms to determine if organizational information has been disclosed in an unauthorized manner.',
	},
	'AU-13 (2)': {
		family: 'AU',
		name: 'Monitoring For Information Disclosure',
		description:
			'MONITORING FOR INFORMATION DISCLOSURE | REVIEW OF MONITORED SITES\nThe organization reviews the open source information sites being monitored [Assignment: organization-defined frequency].',
	},
	'AU-14': {
		family: 'AU',
		name: 'Session Audit',
		description:
			'(A) The information system provides the capability for authorized users to select a user session to capture/record or view/hear.',
	},
	'AU-14 (1)': {
		family: 'AU',
		name: 'Session Audit',
		description:
			'SESSION AUDIT | SYSTEM START-UP\nThe information system initiates session audits at system start-up.',
	},
	'AU-14 (2)': {
		family: 'AU',
		name: 'Session Audit',
		description:
			'SESSION AUDIT | CAPTURE/RECORD AND LOG CONTENT\nThe information system provides the capability for authorized users to capture/record and log content related to a user session.',
	},
	'AU-14 (3)': {
		family: 'AU',
		name: 'Session Audit',
		description:
			'SESSION AUDIT | REMOTE VIEWING / LISTENING\nThe information system provides the capability for authorized users to remotely view/hear all content related to an established user session in real time.',
	},
	'AU-15': {
		family: 'AU',
		name: 'Alternate Audit Capability',
		description:
			'(A) The organization provides an alternate audit capability in the event of a failure in primary audit capability that provides [Assignment: organization-defined alternate audit functionality].\n',
	},
	'AU-16': {
		family: 'AU',
		name: 'Cross-Organizational Auditing',
		description:
			'(A) The organization employs [Assignment: organization-defined methods] for coordinating [Assignment: organization-defined audit information] among external organizations when audit information is transmitted across organizational boundaries.\n',
	},
	'AU-16 (1)': {
		family: 'AU',
		name: 'Cross-Organizational Auditing',
		description:
			'CROSS-ORGANIZATIONAL AUDITING | IDENTITY PRESERVATION \nThe organization requires that the identity of individuals be preserved in cross-organizational audit trails. \n',
	},
	'AU-16 (2)': {
		family: 'AU',
		name: 'Cross-Organizational Auditing',
		description:
			'CROSS-ORGANIZATIONAL AUDITING | SHARING OF AUDIT INFORMATION \nThe organization provides cross-organizational audit information to [Assignment: organization-defined organizations] based on [Assignment: organization-defined cross-organizational sharing agreements]. \n',
	},
	'CA-1': {
		family: 'CA',
		name: 'Security Assessment And Authorization Policies And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A security assessment and authorization policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the security assessment and authorization policy and associated security assessment and authorization controls.\n(B) The organization reviews and updates the current:\n(a) Security assessment and authorization policy [Assignment: organization-defined frequency]; and\n(b) Security assessment and authorization procedures [Assignment: organization-defined frequency].',
	},
	'CA-2': {
		family: 'CA',
		name: 'Security Assessments',
		description:
			'(A) The organization develops a security assessment plan that describes the scope of the assessment including:\n(a) Security controls and control enhancements under assessment;\n(b) Assessment procedures to be used to determine security control effectiveness; and\n(c) Assessment environment, assessment team, and assessment roles and responsibilities.\n(B) The organization assesses the security controls in the information system and its environment of operation [Assignment: organization-defined frequency] to determine the extent to which the controls are implemented correctly, operating as intended, and producing the desired outcome with respect to meeting established security requirements.\n(C) The organization produces a security assessment report that documents the results of the assessment.\n(D) The organization provides the results of the security control assessment to [Assignment: organization-defined individuals or roles].',
	},
	'CA-2 (1)': {
		family: 'CA',
		name: 'Security Assessments',
		description:
			'SECURITY ASSESSMENTS | INDEPENDENT ASSESSORS\nThe organization employs assessors or assessment teams with [Assignment: organization-defined level of independence] to conduct security control assessments.',
	},
	'CA-2 (2)': {
		family: 'CA',
		name: 'Security Assessments',
		description:
			'SECURITY ASSESSMENTS | SPECIALIZED ASSESSMENTS\nThe organization includes as part of security control assessments, [Assignment: organization-defined frequency], [Selection: announced; unannounced], [Selection (one or more): in-depth monitoring; vulnerability scanning; malicious user testing; insider threat assessment; performance/load testing; [Assignment: organization-defined other forms of security assessment]].',
	},
	'CA-2 (3)': {
		family: 'CA',
		name: 'Security Assessments',
		description:
			'SECURITY ASSESSMENTS | EXTERNAL ORGANIZATIONS\nThe organization accepts the results of an assessment of [Assignment: organization-defined information system] performed by [Assignment: organization-defined external organization] when the assessment meets [Assignment: organization-defined requirements].',
	},
	'CA-3': {
		family: 'CA',
		name: 'Information System Connections',
		description:
			'(A) The organization authorizes connections from the information system to other information systems through the use of Interconnection Security Agreements.\n(B) The organization documents, for each interconnection, the interface characteristics, security requirements, and the nature of the information communicated.\n(C) The organization reviews and updates Interconnection Security Agreements [Assignment: organization-defined frequency].',
	},
	'CA-3 (1)': {
		family: 'CA',
		name: 'Information System Connections',
		description:
			'SYSTEM INTERCONNECTIONS | UNCLASSIFIED NATIONAL SECURITY SYSTEM CONNECTIONS\nThe organization prohibits the direct connection of an [Assignment: organization-defined unclassified, national security system] to an external network without the use of [Assignment: organization-defined boundary protection device].',
	},
	'CA-3 (2)': {
		family: 'CA',
		name: 'Information System Connections',
		description:
			'SYSTEM INTERCONNECTIONS | CLASSIFIED NATIONAL SECURITY SYSTEM CONNECTIONS\nThe organization prohibits the direct connection of a classified, national security system to an external network without the use of [Assignment: organization-defined boundary protection device].',
	},
	'CA-3 (3)': {
		family: 'CA',
		name: 'Information System Connections',
		description:
			'SYSTEM INTERCONNECTIONS | UNCLASSIFIED NON-NATIONAL SECURITY SYSTEM CONNECTIONS\nThe organization prohibits the direct connection of an [Assignment: organization-defined unclassified, non-national security system] to an external network without the use of [Assignment; organization-defined boundary protection device].',
	},
	'CA-3 (4)': {
		family: 'CA',
		name: 'Information System Connections',
		description:
			'SYSTEM INTERCONNECTIONS | CONNECTIONS TO PUBLIC NETWORKS\nThe organization prohibits the direct connection of an [Assignment: organization-defined information system] to a public network.',
	},
	'CA-3 (5)': {
		family: 'CA',
		name: 'Information System Connections',
		description:
			'SYSTEM INTERCONNECTIONS | RESTRICTIONS ON EXTERNAL SYSTEM CONNECTIONS\nThe organization employs [Selection: allow-all, deny-by-exception; deny-all, permit-by-exception] policy for allowing [Assignment: organization-defined information systems] to connect to external information systems.',
	},
	'CA-4': {
		family: 'CA',
		name: 'Security Certification',
		description: '',
	},
	'CA-5': {
		family: 'CA',
		name: 'Plan Of Action And Milestones',
		description:
			'(A) The organization develops a plan of action and milestones for the information system to document the organization’s planned remedial actions to correct weaknesses or deficiencies noted during the assessment of the security controls and to reduce or eliminate known vulnerabilities in the system; and\n(B) The organization updates existing plan of action and milestones [Assignment: organization-defined frequency] based on the findings from security controls assessments, security impact analyses, and continuous monitoring activities.',
	},
	'CA-5 (1)': {
		family: 'CA',
		name: 'Plan Of Action And Milestones',
		description:
			'PLAN OF ACTION AND MILESTONES | AUTOMATION SUPPORT FOR ACCURACY / CURRENCY\nThe organization employs automated mechanisms to help ensure that the plan of action and milestones for the information system is accurate, up to date, and readily available.',
	},
	'CA-6': {
		family: 'CA',
		name: 'Security Authorization',
		description:
			'(A) The organization assigns a senior-level executive or manager as the authorizing official for the information system.\n(B) The organization ensures that the authorizing official authorizes the information system for processing before commencing operations.\n(C) The organization updates the security authorization [Assignment: organization-defined frequency].',
	},
	'CA-7': {
		family: 'CA',
		name: 'Continuous Monitoring',
		description:
			'(A) The organization develops a continuous monitoring strategy and implements a continuous monitoring program that includes establishment of [Assignment: organization-defined metrics] to be monitored.\n(B) The organization develops a continuous monitoring strategy and implements a continuous monitoring program that includes establishment of [Assignment: organization-defined frequencies] for monitoring and [Assignment: organization-defined frequencies] for assessments supporting such monitoring.\n(C) The organization develops a continuous monitoring strategy and implements a continuous monitoring program that includes ongoing security control assessments in accordance with the organizational continuous monitoring strategy.\n(D) The organization develops a continuous monitoring strategy and implements a continuous monitoring program that includes ongoing security status monitoring of organization-defined metrics in accordance with the organizational continuous monitoring strategy.\n(E) The organization develops a continuous monitoring strategy and implements a continuous monitoring program that includes correlation and analysis of security-related information generated by assessments and monitoring.\n(F) The organization develops a continuous monitoring strategy and implements a continuous monitoring program that includes response actions to address results of the analysis of security-related information.\n(G) The organization develops a continuous monitoring strategy and implements a continuous monitoring program that includes reporting the security status of organization and the information system to [Assignment: organization-defined personnel or roles] [Assignment: organization-defined frequency].',
	},
	'CA-7 (1)': {
		family: 'CA',
		name: 'Continuous Monitoring',
		description:
			'CONTINUOUS MONITORING | INDEPENDENT ASSESSMENT\nThe organization employs assessors or assessment teams with [Assignment: organization-defined level of independence] to monitor the security controls in the information system on an ongoing basis.',
	},
	'CA-7 (2)': {
		family: 'CA',
		name: 'Continuous Monitoring',
		description: 'CONTINUOUS MONITORING | TYPES OF ASSESSMENTS',
	},
	'CA-7 (3)': {
		family: 'CA',
		name: 'Continuous Monitoring',
		description:
			'CONTINUOUS MONITORING | TREND ANALYSES\nThe organization employs trend analyses to determine if security control implementations, the frequency of continuous monitoring activities, and/or the types of activities used in the continuous monitoring process need to be modified based on empirical data.',
	},
	'CA-8': {
		family: 'CA',
		name: 'Penetration Testing',
		description:
			'(A) The organization conducts penetration testing [Assignment: organization-defined frequency] on [Assignment: organization-defined information systems or system components].',
	},
	'CA-8 (1)': {
		family: 'CA',
		name: 'Penetration Testing',
		description:
			'PENETRATION TESTING | INDEPENDENT PENETRATION AGENT OR TEAM\nThe organization employs an independent penetration agent or penetration team to perform penetration testing on the information system or system components.',
	},
	'CA-8 (2)': {
		family: 'CA',
		name: 'Penetration Testing',
		description:
			'PENETRATION TESTING | RED TEAM EXERCISES\nThe organization employs [Assignment: organization-defined red team exercises] to simulate attempts by adversaries to compromise organizational information systems in accordance with [Assignment: organization-defined rules of engagement].\n',
	},
	'CA-9': {
		family: 'CA',
		name: 'Internal System Connections',
		description:
			'(A) The organization authorizes internal connections of [Assignment: organization-defined information system components or classes of components] to the information system.\n(B) The organization documents, for each internal connection, the interface characteristics, security requirements, and the nature of the information communicated.',
	},
	'CA-9 (1)': {
		family: 'CA',
		name: 'Internal System Connections',
		description:
			'INTERNAL SYSTEM CONNECTIONS | SECURITY COMPLIANCE CHECKS\nThe information system performs security compliance checks on constituent system components prior to the establishment of the internal connection.',
	},
	'CM-1': {
		family: 'CM',
		name: 'Configuration Management Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A configuration management policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the configuration management policy and associated configuration management controls.\n(B) The organization reviews and updates the current:\n(a) Configuration management policy [Assignment: organization-defined frequency]; and\n(b) Configuration management procedures [Assignment: organization-defined frequency].',
	},
	'CM-2': {
		family: 'CM',
		name: 'Baseline Configuration',
		description:
			'(A) The organization develops, documents, and maintains under configuration control, a current baseline configuration of the information system.',
	},
	'CM-2 (1)': {
		family: 'CM',
		name: 'Baseline Configuration',
		description:
			'BASELINE CONFIGURATION | REVIEWS AND UPDATES\nThe organization reviews and updates the baseline configuration of the information system:\n(a) [Assignment: organization-defined frequency];\n(b) When required due to [Assignment organization-defined circumstances]; and\n(c) As an integral part of information system component installations and upgrades.',
	},
	'CM-2 (2)': {
		family: 'CM',
		name: 'Baseline Configuration',
		description:
			'BASELINE CONFIGURATION | AUTOMATION SUPPORT FOR ACCURACY / CURRENCY\nThe organization employs automated mechanisms to maintain an up-to-date, complete, accurate, and readily available baseline configuration of the information system.',
	},
	'CM-2 (3)': {
		family: 'CM',
		name: 'Baseline Configuration',
		description:
			'BASELINE CONFIGURATION | RETENTION OF PREVIOUS CONFIGURATIONS\nThe organization retains [Assignment: organization-defined previous versions of baseline configurations of the information system] to support rollback.',
	},
	'CM-2 (4)': {
		family: 'CM',
		name: 'Baseline Configuration',
		description: 'BASELINE CONFIGURATION | UNAUTHORIZED SOFTWARE',
	},
	'CM-2 (5)': {
		family: 'CM',
		name: 'Baseline Configuration',
		description: 'BASELINE CONFIGURATION | AUTHORIZED SOFTWARE',
	},
	'CM-2 (6)': {
		family: 'CM',
		name: 'Baseline Configuration',
		description:
			'BASELINE CONFIGURATION | DEVELOPMENT AND TEST ENVIRONMENTS\nThe organization maintains a baseline configuration for information system development and test environments that is managed separately from the operational baseline configuration.',
	},
	'CM-2 (7)': {
		family: 'CM',
		name: 'Baseline Configuration',
		description:
			'BASELINE CONFIGURATION | CONFIGURE SYSTEMS, COMPONENTS, OR DEVICES FOR HIGH-RISK AREAS\n(a) The organization issues [Assignment: organization-defined information systems, system components, or devices] with [Assignment: organization-defined configurations] to individuals traveling to locations that the organization deems to be of significant risk; and\n(b) The organization applies [Assignment: organization-defined security safeguards] to the devices when the individuals return.',
	},
	'CM-3': {
		family: 'CM',
		name: 'Configuration Change Control',
		description:
			'(A) The organization determines the types of changes to the information system that are configuration-controlled.\n(B) The organization reviews proposed configuration-controlled changes to the information system and approves or disapproves such changes with explicit consideration for security impact analyses.\n(C) The organization documents configuration change decisions associated with the information system.\n(D) The organization implements approved configuration-controlled changes to the information system.\n(E) The organization retains records of configuration-controlled changes to the information system for [Assignment: organization-defined time period].\n(F) The organization audits and reviews activities associated with configuration-controlled changes to the information system.\n(G) The organization coordinates and provides oversight for configuration change control activities through [Assignment: organization-defined configuration change control element (e.g., committee, board)] that convenes [Selection (one or more): [Assignment: organization-defined frequency]; [Assignment: organization-defined configuration change conditions]].',
	},
	'CM-3 (1)': {
		family: 'CM',
		name: 'Configuration Change Control',
		description:
			'CONFIGURATION CHANGE CONTROL | AUTOMATED DOCUMENT / NOTIFICATION / PROHIBITION OF CHANGES\nThe organization employs automated mechanisms to:\n(a) Document proposed changes to the information system;\n(b) Notify [Assignment: organized-defined approval authorities] of proposed changes to the information system and request change approval;\n(c) Highlight proposed changes to the information system that have not been approved or have been disapproved by [Assignment: organization-defined time period];\n(d) Prohibit changes to the information system until designated approvals are received;\n(e) Document all changes to the information system; and\n(f) Notify [Assignment: organization-defined personnel] when approved changes to the information system are completed.',
	},
	'CM-3 (2)': {
		family: 'CM',
		name: 'Configuration Change Control',
		description:
			'CONFIGURATION CHANGE CONTROL | TEST / VALIDATE / DOCUMENT CHANGES\nThe organization tests, validates, and documents changes to the information system before implementing the changes on the operational system.',
	},
	'CM-3 (3)': {
		family: 'CM',
		name: 'Configuration Change Control',
		description:
			'CONFIGURATION CHANGE CONTROL | AUTOMATED CHANGE IMPLEMENTATION\nThe organization employs automated mechanisms to implement changes to the current information system baseline and deploys the updated baseline across the installed base.',
	},
	'CM-3 (4)': {
		family: 'CM',
		name: 'Configuration Change Control',
		description:
			'CONFIGURATION CHANGE CONTROL | SECURITY REPRESENTATIVE\nThe organization requires an information security representative to be a member of the [Assignment: organization-defined configuration change control element].',
	},
	'CM-3 (5)': {
		family: 'CM',
		name: 'Configuration Change Control',
		description:
			'CONFIGURATION CHANGE CONTROL | AUTOMATED SECURITY RESPONSE\nThe information system implements [Assignment: organization-defined security responses] automatically if baseline configurations are changed in an unauthorized manner.',
	},
	'CM-3 (6)': {
		family: 'CM',
		name: 'Configuration Change Control',
		description:
			'CONFIGURATION CHANGE CONTROL | CRYPTOGRAPHY MANAGEMENT\nThe organization ensures that cryptographic mechanisms used to provide [Assignment: organization-defined security safeguards] are under configuration management.',
	},
	'CM-4': {
		family: 'CM',
		name: 'Security Impact Analysis',
		description:
			'(A) The organization analyzes changes to the information system to determine potential security impacts prior to change implementation.',
	},
	'CM-4 (1)': {
		family: 'CM',
		name: 'Security Impact Analysis',
		description:
			'SECURITY IMPACT ANALYSIS | SEPARATE TEST ENVIRONMENTS\nThe organization analyzes changes to the information system in a separate test environment before implementation in an operational environment, looking for security impacts due to flaws, weaknesses, incompatibility, or intentional malice.',
	},
	'CM-4 (2)': {
		family: 'CM',
		name: 'Security Impact Analysis',
		description:
			'SECURITY IMPACT ANALYSIS | VERIFICATION OF SECURITY FUNCTIONS\nThe organization, after the information system is changed, checks the security functions to verify that the functions are implemented correctly, operating as intended, and producing the desired outcome with regard to meeting the security control requirements for the system.',
	},
	'CM-5': {
		family: 'CM',
		name: 'Access Restrictions For Change',
		description:
			'(A) The organization defines, documents, approves, and enforces physical and logical access restrictions associated with changes to the information system.',
	},
	'CM-5 (1)': {
		family: 'CM',
		name: 'Access Restrictions For Change',
		description:
			'ACCESS RESTRICTIONS FOR CHANGE | AUTOMATED ACCESS ENFORCEMENT / AUDITING\nThe information system enforces access restrictions and supports auditing of the enforcement actions.',
	},
	'CM-5 (2)': {
		family: 'CM',
		name: 'Access Restrictions For Change',
		description:
			'ACCESS RESTRICTIONS FOR CHANGE | REVIEW SYSTEM CHANGES\nThe organization reviews information system changes [Assignment: organization-defined frequency] and [Assignment: organization-defined circumstances] to determine whether unauthorized changes have occurred.',
	},
	'CM-5 (3)': {
		family: 'CM',
		name: 'Access Restrictions For Change',
		description:
			'ACCESS RESTRICTIONS FOR CHANGE | SIGNED COMPONENTS\nThe information system prevents the installation of [Assignment: organization-defined software and firmware components] without verification that the component has been digitally signed using a certificate that is recognized and approved by the organization.',
	},
	'CM-5 (4)': {
		family: 'CM',
		name: 'Access Restrictions For Change',
		description:
			'ACCESS RESTRICTIONS FOR CHANGE | DUAL AUTHORIZATION\nThe organization enforces dual authorization for implementing changes to [Assignment: organization-defined information system components and system-level information].',
	},
	'CM-5 (5)': {
		family: 'CM',
		name: 'Access Restrictions For Change',
		description:
			'ACCESS RESTRICTIONS FOR CHANGE | LIMIT PRODUCTION / OPERATIONAL PRIVILEGES\n(a) The organization limits privileges to change information system components and system-related information within a production or operational environment; and\n(b) The organization reviews and re-evaluates privileges [Assignment: organization-defined frequency].',
	},
	'CM-5 (6)': {
		family: 'CM',
		name: 'Access Restrictions For Change',
		description:
			'ACCESS RESTRICTIONS FOR CHANGE | LIMIT LIBRARY PRIVILEGES\nThe organization limits privileges to change software resident within software libraries.\nSupplemental Guidance: Software libraries include privileged programs. Related control: AC-2.',
	},
	'CM-5 (7)': {
		family: 'CM',
		name: 'Access Restrictions For Change',
		description:
			'ACCESS RESTRICTIONS FOR CHANGE | AUTOMATIC IMPLEMENTATION OF SECURITY SAFEGUARDS',
	},
	'CM-6': {
		family: 'CM',
		name: 'Configuration Settings',
		description:
			'(A) The organization establishes and documents configuration settings for information technology products employed within the information system using [Assignment: organization-defined security configuration checklists] that reflect the most restrictive mode consistent with operational requirements.\n(B) The organization implements the configuration settings.\n(C) The organization identifies, documents, and approves any deviations from established configuration settings for [Assignment: organization-defined information system components] based on [Assignment: organization-defined operational requirements].\n(D) The organization monitors and controls changes to the configuration settings in accordance with organizational policies and procedures.',
	},
	'CM-6 (1)': {
		family: 'CM',
		name: 'Configuration Settings',
		description:
			'CONFIGURATION SETTINGS | AUTOMATED CENTRAL MANAGEMENT / APPLICATION / VERIFICATION\nThe organization employs automated mechanisms to centrally manage, apply, and verify configuration settings for [Assignment: organization-defined information system components].',
	},
	'CM-6 (2)': {
		family: 'CM',
		name: 'Configuration Settings',
		description:
			'CONFIGURATION SETTINGS | RESPOND TO UNAUTHORIZED CHANGES\nThe organization employs [Assignment: organization-defined security safeguards] to respond to unauthorized changes to [Assignment: organization-defined configuration settings].',
	},
	'CM-6 (3)': {
		family: 'CM',
		name: 'Configuration Settings',
		description: 'CONFIGURATION SETTINGS | UNAUTHORIZED CHANGE DETECTION',
	},
	'CM-6 (4)': {
		family: 'CM',
		name: 'Configuration Settings',
		description: 'CONFIGURATION SETTINGS | CONFORMANCE DEMONSTRATION',
	},
	'CM-7': {
		family: 'CM',
		name: 'Least Functionality',
		description:
			'(A) The organization configures the information system to provide only essential capabilities.\n(B) The organization prohibits or restricts the use of the following functions, ports, protocols, and/or services: [Assignment: organization-defined prohibited or restricted functions, ports, protocols, and/or services].',
	},
	'CM-7 (1)': {
		family: 'CM',
		name: 'Least Functionality',
		description:
			'LEAST FUNCTIONALITY | PERIODIC REVIEW\nThe organization reviews the information system [Assignment: organization-defined frequency] to identify unnecessary and/or non-secure functions, ports, protocols, and services; and\nThe organization disables [Assignment: organization-defined functions, ports, protocols, and services within the information system deemed to be unnecessary and/or non-secure].',
	},
	'CM-7 (2)': {
		family: 'CM',
		name: 'Least Functionality',
		description:
			'LEAST FUNCTIONALITY | PREVENT PROGRAM EXECUTION\nThe information system prevents program execution in accordance with [Selection (one or more): [Assignment: organization-defined policies regarding software program usage and restrictions]; rules authorizing the terms and conditions of software program usage].',
	},
	'CM-7 (3)': {
		family: 'CM',
		name: 'Least Functionality',
		description:
			'LEAST FUNCTIONALITY | REGISTRATION COMPLIANCE\nThe organization ensures compliance with [Assignment: organization-defined registration requirements for functions, ports, protocols, and services].',
	},
	'CM-7 (4)': {
		family: 'CM',
		name: 'Least Functionality',
		description:
			'LEAST FUNCTIONALITY | UNAUTHORIZED SOFTWARE / BLACKLISTING\n(a) The organization identifies [Assignment: organization-defined software programs not authorized to execute on the information system];\n(b) The organization employs an allow-all, deny-by-exception policy to prohibit the execution of unauthorized software programs on the information system; and\n(c) The organization reviews and updates the list of unauthorized software programs [Assignment: organization-defined frequency].',
	},
	'CM-7 (5)': {
		family: 'CM',
		name: 'Least Functionality',
		description:
			'LEAST FUNCTIONALITY | AUTHORIZED SOFTWARE / WHITELISTING\n(a) The organization identifies [Assignment: organization-defined software programs authorized to execute on the information system];\n(b) The organization employs a deny-all, permit-by-exception policy to allow the execution of authorized software programs on the information system; and\n(c) The organization reviews and updates the list of authorized software programs [Assignment: organization-defined frequency].',
	},
	'CM-8': {
		family: 'CM',
		name: 'Information System Component Inventory',
		description:
			'(A) The organization develops and documents an inventory of information system components that accurately reflects the current information system.\n(B) The organization develops and documents an inventory of information system components that includes all components within the authorization boundary of the information system.\n(C) The organization develops and documents an inventory of information system components that is at the level of granularity deemed necessary for tracking and reporting.\n(D) The organization develops and documents an inventory of information system components that includes [Assignment: organization-defined information deemed necessary to achieve effective information system component accountability].\n(E) The organization reviews and updates the information system component inventory [Assignment: organization-defined frequency].',
	},
	'CM-8 (1)': {
		family: 'CM',
		name: 'Information System Component Inventory',
		description:
			'INFORMATION SYSTEM COMPONENT INVENTORY | UPDATES DURING INSTALLATIONS / REMOVALS\nThe organization updates the inventory of information system components as an integral part of component installations, removals, and information system updates.',
	},
	'CM-8 (2)': {
		family: 'CM',
		name: 'Information System Component Inventory',
		description:
			'INFORMATION SYSTEM COMPONENT INVENTORY | AUTOMATED MAINTENANCE\nThe organization employs automated mechanisms to help maintain an up-to-date, complete, accurate, and readily available inventory of information system components.',
	},
	'CM-8 (3)': {
		family: 'CM',
		name: 'Information System Component Inventory',
		description:
			'INFORMATION SYSTEM COMPONENT INVENTORY | AUTOMATED UNAUTHORIZED COMPONENT DETECTION\n(a) The organization employs automated mechanisms [Assignment: organization-defined frequency] to detect the presence of unauthorized hardware, software, and firmware components within the information system; and\n(b) The organization takes the following actions when unauthorized components are detected: [Selection (one or more): disables network access by such components; isolates the components; notifies [Assignment: organization-defined personnel or roles]].',
	},
	'CM-8 (4)': {
		family: 'CM',
		name: 'Information System Component Inventory',
		description:
			'INFORMATION SYSTEM COMPONENT INVENTORY | ACCOUNTABILITY INFORMATION\nThe organization includes in the information system component inventory information, a means for identifying by [Selection (one or more): name; position; role], individuals responsible/accountable for administering those components.',
	},
	'CM-8 (5)': {
		family: 'CM',
		name: 'Information System Component Inventory',
		description:
			'INFORMATION SYSTEM COMPONENT INVENTORY | NO DUPLICATE ACCOUNTING OF COMPONENTS\nThe organization verifies that all components within the authorization boundary of the information system are not duplicated in other information system component inventories.',
	},
	'CM-8 (6)': {
		family: 'CM',
		name: 'Information System Component Inventory',
		description:
			'INFORMATION SYSTEM COMPONENT INVENTORY | ASSESSED CONFIGURATIONS / APPROVED DEVIATIONS\nThe organization includes assessed component configurations and any approved deviations to current deployed configurations in the information system component inventory.',
	},
	'CM-8 (7)': {
		family: 'CM',
		name: 'Information System Component Inventory',
		description:
			'INFORMATION SYSTEM COMPONENT INVENTORY | CENTRALIZED REPOSITORY\nThe organization provides a centralized repository for the inventory of information system components.',
	},
	'CM-8 (8)': {
		family: 'CM',
		name: 'Information System Component Inventory',
		description:
			'INFORMATION SYSTEM COMPONENT INVENTORY | AUTOMATED LOCATION TRACKING\nThe organization employs automated mechanisms to support tracking of information system components by geographic location.',
	},
	'CM-8 (9)': {
		family: 'CM',
		name: 'Information System Component Inventory',
		description:
			'INFORMATION SYSTEM COMPONENT INVENTORY | ASSIGNMENT OF COMPONENTS TO SYSTEMS\n(a) The organization assigns [Assignment: organization-defined acquired information system components] to an information system; and \n(b) The organization receives an acknowledgement from the information system owner of this assignment.',
	},
	'CM-9': {
		family: 'CM',
		name: 'Configuration Management Plan',
		description:
			'(A) The organization develops, documents, and implements a configuration management plan for the information system that addresses roles, responsibilities, and configuration management processes and procedures.\n(B) The organization develops, documents, and implements a configuration management plan for the information system that establishes a process for identifying configuration items throughout the system development life cycle and for managing the configuration of the configuration items.\n(C) The organization develops, documents, and implements a configuration management plan for the information system that defines the configuration items for the information system and places the configuration items under configuration management; and\n(D) The organization develops, documents, and implements a configuration management plan for the information system that protects the configuration management plan from unauthorized disclosure and modification.',
	},
	'CM-9 (1)': {
		family: 'CM',
		name: 'Configuration Management Plan',
		description:
			'CONFIGURATION MANAGEMENT PLAN | ASSIGNMENT OF RESPONSIBILITY\nThe organization assigns responsibility for developing the configuration management process to organizational personnel that are not directly involved in information system development.',
	},
	'CM-10': {
		family: 'CM',
		name: 'Software Usage Restrictions',
		description:
			'(A) The organization uses software and associated documentation in accordance with contract agreements and copyright laws.\n(B) The organization tracks the use of software and associated documentation protected by quantity licenses to control copying and distribution.\n(C) The organization controls and documents the use of peer-to-peer file sharing technology to ensure that this capability is not used for the unauthorized distribution, display, performance, or reproduction of copyrighted work.',
	},
	'CM-10 (1)': {
		family: 'CM',
		name: 'Software Usage Restrictions',
		description:
			'SOFTWARE USAGE RESTRICTIONS | OPEN SOURCE SOFTWARE\nThe organization establishes the following restrictions on the use of open source software: [Assignment: organization-defined restrictions].',
	},
	'CM-11': {
		family: 'CM',
		name: 'User Installed Software',
		description:
			'(A) The organization establishes [Assignment: organization-defined policies] governing the installation of software by users.\n(B) The organization enforces software installation policies through [Assignment: organization-defined methods].\n(C) The organization monitors policy compliance at [Assignment: organization-defined frequency].',
	},
	'CM-11 (1)': {
		family: 'CM',
		name: 'User Installed Software',
		description:
			'USER-INSTALLED SOFTWARE | ALERTS FOR UNAUTHORIZED INSTALLATIONS\nThe information system alerts [Assignment: organization-defined personnel or roles] when the unauthorized installation of software is detected.',
	},
	'CM-11 (2)': {
		family: 'CM',
		name: 'User Installed Software',
		description:
			'USER-INSTALLED SOFTWARE | PROHIBIT INSTALLATION WITHOUT PRIVILEGED STATUS\nThe information system prohibits user installation of software without explicit privileged status.',
	},
	'CP-1': {
		family: 'CP',
		name: 'Contingency Planning Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A contingency planning policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the contingency planning policy and associated contingency planning controls.\n(B) The organization reviews and updates the current:\n(a) Contingency planning policy [Assignment: organization-defined frequency]; and\n(b) Contingency planning procedures [Assignment: organization-defined frequency].\n(AA) The organization develops an audit cycle for the contingency plan program as the basis of regular reporting to TBS.',
	},
	'CP-2': {
		family: 'CP',
		name: 'Contingency Plan',
		description:
			'(A) The organization develops a contingency plan for the information system that:\n(a) Identifies essential missions and business functions and associated contingency requirements;\n(b) Provides recovery objectives, restoration priorities, and metrics;\n(c) Addresses contingency roles, responsibilities, and assigned individuals with contact information;\n(d) Addresses maintaining essential missions and business functions despite an information system disruption, compromise, or failure; \n(e) Addresses eventual, full information system restoration without deterioration of the security safeguards originally planned and implemented; and\n(f) Is reviewed and approved by [Assignment: organization-defined personnel or roles].\n(B) The organization distributes copies of the contingency plan to [Assignment: organization-defined key contingency personnel (identified by name and/or by role) and organizational elements].\n(C) The organization coordinates contingency planning activities with incident handling activities.\n(D) The organization reviews the contingency plan for the information system [Assignment: organization-defined frequency].\n(E) The organization updates the contingency plan to address changes to the organization, information system, or environment of operation and problems encountered during contingency plan implementation, execution, or testing.\n(F) The organization communicates contingency plan changes to [Assignment: organization-defined key contingency personnel (identified by name and/or by role) and organizational elements].\n(G) The organization protects the contingency plan from unauthorized disclosure and modification.',
	},
	'CP-2 (1)': {
		family: 'CP',
		name: 'Contingency Plan',
		description:
			'CONTINGENCY PLAN | COORDINATE WITH RELATED PLANS\nThe organization coordinates contingency plan development with organizational elements responsible for related plans.',
	},
	'CP-2 (2)': {
		family: 'CP',
		name: 'Contingency Plan',
		description:
			'CONTINGENCY PLAN | CAPACITY PLANNING\nThe organization conducts capacity planning so that necessary capacity for information processing, telecommunications, and environmental support exists during contingency operations.',
	},
	'CP-2 (3)': {
		family: 'CP',
		name: 'Contingency Plan',
		description:
			'CONTINGENCY PLAN | RESUME ESSENTIAL MISSIONS / BUSINESS FUNCTIONS\nThe organization plans for the resumption of essential missions and business functions within [Assignment: organization-defined time period] of contingency plan activation.',
	},
	'CP-2 (4)': {
		family: 'CP',
		name: 'Contingency Plan',
		description:
			'CONTINGENCY PLAN | RESUME ALL MISSIONS / BUSINESS FUNCTIONS\nThe organization plans for the resumption of all missions and business functions within [Assignment: organization-defined time period] of contingency plan activation.',
	},
	'CP-2 (5)': {
		family: 'CP',
		name: 'Contingency Plan',
		description:
			'CONTINGENCY PLAN | CONTINUE ESSENTIAL MISSIONS / BUSINESS FUNCTIONS\nThe organization plans for the continuance of essential missions and business functions with little or no loss of operational continuity and sustains that continuity until full information system restoration at primary processing and/or storage sites.',
	},
	'CP-2 (6)': {
		family: 'CP',
		name: 'Contingency Plan',
		description:
			'CONTINGENCY PLAN | ALTERNATE PROCESSING / STORAGE SITE\nThe organization plans for the transfer of essential missions and business functions to alternate processing and/or storage sites with little or no loss of operational continuity and sustains that continuity through information system restoration to primary processing and/or storage sites.',
	},
	'CP-2 (7)': {
		family: 'CP',
		name: 'Contingency Plan',
		description:
			'CONTINGENCY PLAN | COORDINATE WITH EXTERNAL SERVICE PROVIDERS\nThe organization coordinates its contingency plan with the contingency plans of external service providers to ensure that contingency requirements can be satisfied.',
	},
	'CP-2 (8)': {
		family: 'CP',
		name: 'Contingency Plan',
		description:
			'CONTINGENCY PLAN | IDENTIFY CRITICAL ASSETS\nThe organization identifies critical information system assets supporting essential missions and business functions.',
	},
	'CP-3': {
		family: 'CP',
		name: 'Contingency Training',
		description:
			'(A) The organization provides contingency training to information system users consistent with assigned roles and responsibilities within [Assignment: organization-defined time period] of assuming a contingency role or responsibility.\n(B) The organization provides contingency training to information system users consistent with assigned roles and responsibilities when required by information system changes.\n(C) The organization provides contingency training to information system users consistent with assigned roles and responsibilities [Assignment: organization-defined frequency] thereafter.',
	},
	'CP-3 (1)': {
		family: 'CP',
		name: 'Contingency Training',
		description:
			'CONTINGENCY TRAINING | SIMULATED EVENTS\nThe organization incorporates simulated events into contingency training to facilitate effective response by personnel in crisis situations.',
	},
	'CP-3 (2)': {
		family: 'CP',
		name: 'Contingency Training',
		description:
			'CONTINGENCY TRAINING | AUTOMATED TRAINING ENVIRONMENTS\nThe organization employs automated mechanisms to provide a more thorough and realistic contingency training environment.',
	},
	'CP-4': {
		family: 'CP',
		name: 'Contingency Plan Testing And Exercises',
		description:
			'(A) The organization tests the contingency plan for the information system [Assignment: organization-defined frequency] using [Assignment: organization-defined tests] to determine the effectiveness of the plan and the organizational readiness to execute the plan.\n(B) The organization reviews the contingency plan test results.\n(C) The organization initiates corrective actions, if needed.',
	},
	'CP-4 (1)': {
		family: 'CP',
		name: 'Contingency Plan Testing And Exercises',
		description:
			'CONTINGENCY PLAN TESTING | COORDINATE WITH RELATED PLANS\nThe organization coordinates contingency plan testing with organizational elements responsible for related plans.',
	},
	'CP-4 (2)': {
		family: 'CP',
		name: 'Contingency Plan Testing And Exercises',
		description:
			'CONTINGENCY PLAN TESTING | ALTERNATE PROCESSING SITE\n(a) The organization tests the contingency plan at the alternate processing site to familiarize contingency personnel with the facility and available resources; and\n(b) The organization tests the contingency plan at the alternate processing site to evaluate the capabilities of the alternate processing site to support contingency operations.',
	},
	'CP-4 (3)': {
		family: 'CP',
		name: 'Contingency Plan Testing And Exercises',
		description:
			'CONTINGENCY PLAN TESTING | AUTOMATED TESTING\nThe organization employs automated mechanisms to more thoroughly and effectively test the contingency plan.',
	},
	'CP-4 (4)': {
		family: 'CP',
		name: 'Contingency Plan Testing And Exercises',
		description:
			'CONTINGENCY PLAN TESTING | FULL RECOVERY / RECONSTITUTION\nThe organization includes a full recovery and reconstitution of the information system to a known state as part of contingency plan testing.\n',
	},
	'CP-5': {
		family: 'CP',
		name: 'Contingency Plan Update',
		description: '',
	},
	'CP-6': {
		family: 'CP',
		name: 'Alternate Storage Site',
		description:
			'(A) The organization establishes an alternate storage site including necessary agreements to permit the storage and retrieval of information system backup information.\n(B) The organization ensures that the alternate storage site provides information security safeguards equivalent to that of the primary site.',
	},
	'CP-6 (1)': {
		family: 'CP',
		name: 'Alternate Storage Site',
		description:
			'ALTERNATE STORAGE SITE | SEPARATION FROM PRIMARY SITE\nThe organization identifies an alternate storage site that is separated from the primary storage site to reduce susceptibility to the same threats.',
	},
	'CP-6 (2)': {
		family: 'CP',
		name: 'Alternate Storage Site',
		description:
			'ALTERNATE STORAGE SITE | RECOVERY TIME / POINT OBJECTIVES\nThe organization configures the alternate storage site to facilitate recovery operations in accordance with recovery time and recovery point objectives.',
	},
	'CP-6 (3)': {
		family: 'CP',
		name: 'Alternate Storage Site',
		description:
			'ALTERNATE STORAGE SITE | ACCESSIBILITY\nThe organization identifies potential accessibility problems to the alternate storage site in the event of an area-wide disruption or disaster and outlines explicit mitigation actions.',
	},
	'CP-7': {
		family: 'CP',
		name: 'Alternate Processing Site',
		description:
			'(A) The organization establishes an alternate processing site including necessary agreements to permit the transfer and resumption of [Assignment: organization-defined information system operations] for essential missions/business functions within [Assignment: organization-defined time period consistent with recovery time and recovery point objectives] when the primary processing capabilities are unavailable.\n(B) The organization ensures that equipment and supplies required to transfer and resume operations are available at the alternate processing site or contracts are in place to support delivery to the site within the organization-defined time period for transfer/resumption.\n(C) The organization ensures that the alternate processing site provides information security safeguards equivalent to that of the primary site.',
	},
	'CP-7 (1)': {
		family: 'CP',
		name: 'Alternate Processing Site',
		description:
			'ALTERNATE PROCESSING SITE | SEPARATION FROM PRIMARY SITE\nThe organization identifies an alternate processing site that is separated from the primary processing site to reduce susceptibility to the same threats.',
	},
	'CP-7 (2)': {
		family: 'CP',
		name: 'Alternate Processing Site',
		description:
			'ALTERNATE PROCESSING SITE | ACCESSIBILITY\nThe organization identifies potential accessibility problems to the alternate processing site in the event of an area-wide disruption or disaster and outlines explicit mitigation actions.',
	},
	'CP-7 (3)': {
		family: 'CP',
		name: 'Alternate Processing Site',
		description:
			'ALTERNATE PROCESSING SITE | PRIORITY OF SERVICE\nThe organization develops alternate processing site agreements that contain priority-of-service provisions in accordance with organizational availability requirements (including recovery time objectives).',
	},
	'CP-7 (4)': {
		family: 'CP',
		name: 'Alternate Processing Site',
		description:
			'ALTERNATE PROCESSING SITE | PREPARATION FOR USE\nThe organization prepares the alternate processing site so that the site is ready to be used as the operational site supporting essential missions and business functions.',
	},
	'CP-7 (5)': {
		family: 'CP',
		name: 'Alternate Processing Site',
		description:
			'ALTERNATE PROCESSING SITE | EQUIVALENT INFORMATION SECURITY SAFEGUARDS',
	},
	'CP-7 (6)': {
		family: 'CP',
		name: 'Alternate Processing Site',
		description:
			'ALTERNATE PROCESSING SITE | INABILITY TO RETURN TO PRIMARY SITE\nThe organization plans and prepares for circumstances that preclude returning to the primary processing site.',
	},
	'CP-8': {
		family: 'CP',
		name: 'Telecommunications Services',
		description:
			'(A) The organization establishes alternate telecommunications services including necessary agreements to permit the resumption of [Assignment: organization-defined information system operations] for essential missions and business functions within [Assignment: organization-defined time period] when the primary telecommunications capabilities are unavailable at either the primary or alternate processing or storage sites.',
	},
	'CP-8 (1)': {
		family: 'CP',
		name: 'Telecommunications Services',
		description:
			'TELECOMMUNICATIONS SERVICES | PRIORITY OF SERVICE PROVISIONS\n(a) The organization develops primary and alternate telecommunications service agreements that contain priority-of-service provisions in accordance with organizational availability requirements (including recovery time objectives); and\n(b) The organization requests Telecommunications Service Priority for all telecommunications services used for national security emergency preparedness in the event that the primary and/or alternate telecommunications services are provided by a common carrier.',
	},
	'CP-8 (2)': {
		family: 'CP',
		name: 'Telecommunications Services',
		description:
			'TELECOMMUNICATIONS SERVICES | SINGLE POINTS OF FAILURE\nThe organization obtains alternate telecommunications services to reduce the likelihood of sharing a single point of failure with primary telecommunications services.',
	},
	'CP-8 (3)': {
		family: 'CP',
		name: 'Telecommunications Services',
		description:
			'TELECOMMUNICATIONS SERVICES | SEPARATION OF PRIMARY / ALTERNATE PROVIDERS\nThe organization obtains alternate telecommunications services from providers that are separated from primary service providers to reduce susceptibility to the same threats.',
	},
	'CP-8 (4)': {
		family: 'CP',
		name: 'Telecommunications Services',
		description:
			'TELECOMMUNICATIONS SERVICES | PROVIDER CONTINGENCY PLAN\n(a) The organization requires primary and alternate telecommunications service providers to have contingency plans;\n(b) The organization reviews provider contingency plans to ensure that the plans meet organizational contingency requirements; and\n(c) The organization obtains evidence of contingency testing/training by providers [Assignment: organization-defined frequency].',
	},
	'CP-8 (5)': {
		family: 'CP',
		name: 'Telecommunications Services',
		description:
			'TELECOMMUNICATIONS SERVICES | ALTERNATE TELECOMMUNICATION SERVICE TESTING\nThe organization tests alternate telecommunication services [Assignment: organization-defined frequency].',
	},
	'CP-9': {
		family: 'CP',
		name: 'Information System Backup',
		description:
			'(A) The organization conducts backups of user-level information contained in the information system [Assignment: organization-defined frequency consistent with recovery time and recovery point objectives].\n(B) The organization conducts backups of system-level information contained in the information system [Assignment: organization-defined frequency consistent with recovery time and recovery point objectives].\n(C) The organization conducts backups of information system documentation including security-related documentation [Assignment: organization-defined frequency consistent with recovery time and recovery point objectives].\n(D) The organization protects the confidentiality, integrity, and availability of backup information at storage locations.\n(AA) The organization determines retention periods for essential business information and archived backups.',
	},
	'CP-9 (1)': {
		family: 'CP',
		name: 'Information System Backup',
		description:
			'INFORMATION SYSTEM BACKUP | TESTING FOR RELIABILITY / INTEGRITY\nThe organization tests backup information [Assignment: organization-defined frequency] to verify media reliability and information integrity.',
	},
	'CP-9 (2)': {
		family: 'CP',
		name: 'Information System Backup',
		description:
			'INFORMATION SYSTEM BACKUP | TEST RESTORATION USING SAMPLING\nThe organization uses a sample of backup information in the restoration of selected information system functions as part of contingency plan testing.',
	},
	'CP-9 (3)': {
		family: 'CP',
		name: 'Information System Backup',
		description:
			'INFORMATION SYSTEM BACKUP | SEPARATE STORAGE FOR CRITICAL INFORMATION\nThe organization stores backup copies of [Assignment: organization-defined critical information system software and other security-related information] in a separate facility or in a fire-rated container that is not collocated with the operational system.',
	},
	'CP-9 (4)': {
		family: 'CP',
		name: 'Information System Backup',
		description:
			'INFORMATION SYSTEM BACKUP | PROTECTION FROM UNAUTHORIZED MODIFICATION',
	},
	'CP-9 (5)': {
		family: 'CP',
		name: 'Information System Backup',
		description:
			'INFORMATION SYSTEM BACKUP | TRANSFER TO ALTERNATE STORAGE SITE\nThe organization transfers information system backup information to the alternate storage site [Assignment: organization-defined time period and transfer rate consistent with the recovery time and recovery point objectives].',
	},
	'CP-9 (6)': {
		family: 'CP',
		name: 'Information System Backup',
		description:
			'INFORMATION SYSTEM BACKUP | REDUNDANT SECONDARY SYSTEM\nThe organization accomplishes information system backup by maintaining a redundant secondary system that is not collocated with the primary system and that can be activated without loss of information or disruption to operations.',
	},
	'CP-9 (7)': {
		family: 'CP',
		name: 'Information System Backup',
		description:
			'INFORMATION SYSTEM BACKUP | DUAL AUTHORIZATION\nThe organization enforces dual authorization for the deletion or destruction of [Assignment: organization-defined backup information].',
	},
	'CP-10': {
		family: 'CP',
		name: 'Information System Recovery And Reconstitution',
		description:
			'(A) The organization provides for the recovery and reconstitution of the information system to a known state after a disruption, compromise, or failure.',
	},
	'CP-10 (1)': {
		family: 'CP',
		name: 'Information System Recovery And Reconstitution',
		description:
			'INFORMATION SYSTEM RECOVERY AND RECONSTITUTION | CONTINGENCY PLAN TESTING',
	},
	'CP-10 (2)': {
		family: 'CP',
		name: 'Information System Recovery And Reconstitution',
		description:
			'INFORMATION SYSTEM RECOVERY AND RECONSTITUTION | TRANSACTION RECOVERY\nThe information system implements transaction recovery for systems that are transaction-based.',
	},
	'CP-10 (3)': {
		family: 'CP',
		name: 'Information System Recovery And Reconstitution',
		description:
			'INFORMATION SYSTEM RECOVERY AND RECONSTITUTION | COMPENSATING SECURITY CONTROLS',
	},
	'CP-10 (4)': {
		family: 'CP',
		name: 'Information System Recovery And Reconstitution',
		description:
			'INFORMATION SYSTEM RECOVERY AND RECONSTITUTION | RESTORE WITHIN TIME PERIOD\nThe organization provides the capability to restore information system components within [Assignment: organization-defined restoration time-periods] from configuration-controlled and integrity-protected information representing a known, operational state for the components.',
	},
	'CP-10 (5)': {
		family: 'CP',
		name: 'Information System Recovery And Reconstitution',
		description:
			'INFORMATION SYSTEM RECOVERY AND RECONSTITUTION | FAILOVER CAPABILITY',
	},
	'CP-10 (6)': {
		family: 'CP',
		name: 'Information System Recovery And Reconstitution',
		description:
			'INFORMATION SYSTEM RECOVERY AND RECONSTITUTION | COMPONENT PROTECTION\nThe organization protects backup and restoration hardware, firmware, and software.',
	},
	'CP-11': {
		family: 'CP',
		name: 'Alternate Communications Protocols',
		description:
			'(A) The information system provides the capability to employ [Assignment: organization-defined alternative communications protocols] in support of maintaining continuity of operations.',
	},
	'CP-12': {
		family: 'CP',
		name: 'Safe Mode',
		description:
			'(A) The information system, when [Assignment: organization-defined conditions] are detected, enters a safe mode of operation with [Assignment: organization-defined restrictions of safe mode of operation].',
	},
	'CP-13': {
		family: 'CP',
		name: 'Alternative Security Mechanisms',
		description:
			'(A) The organization employs [Assignment: organization-defined alternative or supplemental security mechanisms] for satisfying [Assignment: organization-defined security functions] when the primary means of implementing the security function is unavailable or compromised.',
	},
	'Family-Control ID Enhancement': {
		family: 'Family',
		name: 'Name',
		description: 'Definition',
	},
	'IA-1': {
		family: 'IA',
		name: 'Identification And Authentication Policy And Procedures',
		description:
			'(A) The organization Develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) An identification and authentication policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the identification and authentication policy and associated identification and authentication controls.\n(B) The organization Reviews and updates the current:\n(a) Identification and authentication policy [Assignment: organization-defined frequency]; and\n(b) Identification and authentication procedures [Assignment: organization-defined frequency].',
	},
	'IA-2': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'(A) The information system uniquely identifies and authenticates organizational users (or processes acting on behalf of organizational users).',
	},
	'IA-2 (1)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | NETWORK ACCESS TO PRIVILEGED ACCOUNTS\nThe information system implements multifactor authentication for network access to privileged accounts.',
	},
	'IA-2 (2)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | NETWORK ACCESS TO NON-PRIVILEGED ACCOUNTS\nThe information system implements multifactor authentication for network access to non-privileged accounts.',
	},
	'IA-2 (3)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | LOCAL ACCESS TO PRIVILEGED ACCOUNTS\nThe information system implements multifactor authentication for local access to privileged accounts.',
	},
	'IA-2 (4)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | LOCAL ACCESS TO NON-PRIVILEGED ACCOUNTS\nThe information system implements multifactor authentication for local access to non-privileged accounts.',
	},
	'IA-2 (5)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | GROUP AUTHENTICATION\nThe organization requires individuals to be authenticated with an individual authenticator when a group authenticator is employed.',
	},
	'IA-2 (6)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | NETWORK ACCESS TO PRIVILEGED ACCOUNTS - SEPARATE DEVICE\nThe information system implements multifactor authentication for network access to privileged accounts such that one of the factors is provided by a device separate from the system gaining access and the device meets [Assignment: organization-defined strength of mechanism requirements].',
	},
	'IA-2 (7)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | NETWORK ACCESS TO NON-PRIVILEGED ACCOUNTS - SEPARATE DEVICE\nThe information system implements multifactor authentication for network access to non-privileged accounts such that one of the factors is provided by a device separate from the system gaining access and the device meets [Assignment: organization-defined strength of mechanism requirements].',
	},
	'IA-2 (8)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | NETWORK ACCESS TO PRIVILEGED ACCOUNTS - REPLAY RESISTANT\nThe information system implements replay-resistant authentication mechanisms for network access to privileged accounts.',
	},
	'IA-2 (9)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | NETWORK ACCESS TO NON-PRIVILEGED ACCOUNTS - REPLAY RESISTANT\nThe information system implements replay-resistant authentication mechanisms for network access to non-privileged accounts.',
	},
	'IA-2 (10)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | SINGLE SIGN-ON\nThe information system provides a single sign-on capability for [Assignment: organization-defined list of information system accounts and services].',
	},
	'IA-2 (100)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'The information system uses multifactor authentication for remote access to privileged accounts.',
	},
	'IA-2 (11)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | REMOTE ACCESS - SEPARATE DEVICE\nThe information system implements multifactor authentication for remote access to privileged and non-privileged accounts such that one of the factors is provided by a device separate from the system being accessed and the device meets [Assignment: organization-defined strength of mechanism requirements].',
	},
	'IA-2 (12)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | ACCEPTANCE OF PIV CREDENTIALS\nThe information system accepts and electronically verifies Personal Identity Verification (PIV) credentials.',
	},
	'IA-2 (13)': {
		family: 'IA',
		name: 'Identification And Authentication (Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | OUT-OF-BAND AUTHENTICATION\nThe information system implements [Assignment: organization-defined out-of-band authentication] under [Assignment: organization-defined conditions].',
	},
	'IA-3': {
		family: 'IA',
		name: 'Device Identification And Authentication',
		description:
			'(A) The information system uniquely identifies and authenticates [Assignment: organization-defined specific and/or types of devices] before establishing a [Selection (one or more): local; remote; network] connection.',
	},
	'IA-3 (1)': {
		family: 'IA',
		name: 'Device Identification And Authentication',
		description:
			'DEVICE IDENTIFICATION AND AUTHENTICATION | CRYPTOGRAPHIC BIDIRECTIONAL AUTHENTICATION\nThe information system authenticates [Assignment: organization-defined specific devices and/or types of devices] before establishing [Selection (one or more): local; remote; network] connection using bidirectional authentication that is cryptographically based.',
	},
	'IA-3 (2)': {
		family: 'IA',
		name: 'Device Identification And Authentication',
		description:
			'DEVICE IDENTIFICATION AND AUTHENTICATION | CRYPTOGRAPHIC BIDIRECTIONAL NETWORK AUTHENTICATION',
	},
	'IA-3 (3)': {
		family: 'IA',
		name: 'Device Identification And Authentication',
		description:
			'DEVICE IDENTIFICATION AND AUTHENTICATION | DYNAMIC ADDRESS ALLOCATION\n(a) The organization standardizes dynamic address allocation lease information and the lease duration assigned to devices in accordance with [Assignment: organization-defined lease information and lease duration]; and\n(b) The organization audits lease information when assigned to a device.',
	},
	'IA-3 (4)': {
		family: 'IA',
		name: 'Device Identification And Authentication',
		description:
			'DEVICE IDENTIFICATION AND AUTHENTICATION | DEVICE ATTESTATION\nThe organization ensures that device identification and authentication based on attestation is handled by [Assignment: organization-defined configuration management process].',
	},
	'IA-4': {
		family: 'IA',
		name: 'Identifier Management',
		description:
			'(A) The organization manages information system identifiers by receiving authorization from [Assignment: organization-defined personnel or roles] to assign an individual, group, role, or device identifier.\n(B) The organization manages information system identifiers by selecting an identifier that identifies an individual, group, role, or device.\n(C) The organization manages information system identifiers by assigning the identifier to the intended individual, group, role, or device.\n(D) The organization manages information system identifiers by preventing reuse of identifiers for [Assignment: organization-defined time period].\n(E) The organization manages information system identifiers by disabling the identifier after [Assignment: organization-defined time period of inactivity].',
	},
	'IA-4 (1)': {
		family: 'IA',
		name: 'Identifier Management',
		description:
			'IDENTIFIER MANAGEMENT | PROHIBIT ACCOUNT IDENTIFIERS AS PUBLIC IDENTIFIERS\nThe organization prohibits the use of information system account identifiers that are the same as public identifiers for individual electronic mail accounts.',
	},
	'IA-4 (2)': {
		family: 'IA',
		name: 'Identifier Management',
		description:
			'IDENTIFIER MANAGEMENT | SUPERVISOR AUTHORIZATION\nThe organization requires that the registration process to receive an individual identifier includes supervisor authorization.',
	},
	'IA-4 (3)': {
		family: 'IA',
		name: 'Identifier Management',
		description:
			'IDENTIFIER MANAGEMENT | MULTIPLE FORMS OF CERTIFICATION\nThe organization requires multiple forms of certification of individual identification such as documentary evidence or a combination of documents and biometrics be presented to the registration authority.',
	},
	'IA-4 (4)': {
		family: 'IA',
		name: 'Identifier Management',
		description:
			'IDENTIFIER MANAGEMENT | IDENTIFY USER STATUS\nThe organization manages individual identifiers by uniquely identifying each individual as [Assignment: organization-defined characteristic identifying individual status].',
	},
	'IA-4 (5)': {
		family: 'IA',
		name: 'Identifier Management',
		description:
			'IDENTIFIER MANAGEMENT | DYNAMIC MANAGEMENT\nThe information system dynamically manages identifiers.',
	},
	'IA-4 (6)': {
		family: 'IA',
		name: 'Identifier Management',
		description:
			'IDENTIFIER MANAGEMENT | CROSS-ORGANIZATION MANAGEMENT\nThe organization coordinates with [Assignment: organization-defined external organizations] for cross-organization management of identifiers.',
	},
	'IA-4 (7)': {
		family: 'IA',
		name: 'Identifier Management',
		description:
			'IDENTIFIER MANAGEMENT | IN-PERSON REGISTRATION\nThe organization requires that the registration process to receive an individual identifier be conducted in person before a designated registration authority.',
	},
	'IA-5': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'(A) The organization manages information system authenticators by verifying, as part of the initial authenticator distribution, the identity of the individual, group, role, or device receiving the authenticator.\n(B) The organization manages information system authenticators by establishing initial authenticator content for authenticators defined by the organization.\n(C) The organization manages information system authenticators by ensuring that authenticators have sufficient strength of mechanism for their intended use.\n(D) The organization manages information system authenticators by establishing and implementing administrative procedures for initial authenticator distribution, for lost/compromised or damaged authenticators, and for revoking authenticators.\n(E) The organization manages information system authenticators by changing the default content of authenticators prior to information system installation.\n(F) The organization manages information system authenticators by establishing minimum and maximum lifetime restrictions and reuse conditions for authenticators.\n(G) The organization manages information system authenticators by changing/refreshing authenticators [Assignment: organization-defined time period by authenticator type].\n(H) The organization manages information system authenticators by protecting authenticator content from unauthorized disclosure and modification.\n(I) The organization manages information system authenticators by requiring individuals to take, and having devices implement, specific security safeguards to protect authenticators.\n(J) The organization manages information system authenticators by changing authenticators for group/role accounts when membership to those accounts changes.',
	},
	'IA-5 (1)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | PASSWORD-BASED AUTHENTICATION\n(a) The information system, for password-based authentication, enforces minimum password complexity of [Assignment: organization-defined requirements for case sensitivity, number of characters, mix of upper-case letters, lower-case letters, numbers, and special characters, including minimum requirements for each type];\n(b) The information system, for password-based authentication, enforces at least the following number of changed characters when new passwords are created: [Assignment: organization-defined number];\n(c) The information system, for password-based authentication, stores and transmits only cryptographically-protected passwords;\n(d) The information system, for password-based authentication, enforces password minimum and maximum lifetime restrictions of [Assignment: organization-defined numbers for lifetime minimum, lifetime maximum];\n(e) The information system, for password-based authentication prohibits password reuse for [Assignment: organization-defined number] generations; and\n(f) The information system, for password-based authentication allows the use of a temporary password for system logons with an immediate change to a permanent password.',
	},
	'IA-5 (2)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | PKI-BASED AUTHENTICATION\n(a) The information system, for PKI-based authentication, validates certifications by constructing and verifying a certification path to an accepted trust anchor including checking certificate status information;\n(b) The information system, for PKI-based authentication, enforces authorized access to the corresponding private key;\n(c) The information system, for PKI-based authentication, maps the authenticated identity to the account of the individual or group; and\n(d) The information system, for PKI-based authentication, implements a local cache of revocation data to support path discovery and validation in case of inability to access revocation information via the network.',
	},
	'IA-5 (3)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | IN-PERSON OR TRUSTED THIRD-PARTY REGISTRATION\nThe organization requires that the registration process to receive [Assignment: organization-defined types of and/or specific authenticators] be conducted [Selection: in person; by a trusted third party] before [Assignment: organization-defined registration authority] with authorization by [Assignment: organization-defined personnel or roles].',
	},
	'IA-5 (4)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | AUTOMATED SUPPORT FOR PASSWORD STRENGTH DETERMINATION\nThe organization employs automated tools to determine if password authenticators are sufficiently strong to satisfy [Assignment: organization-defined requirements].',
	},
	'IA-5 (5)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | CHANGE AUTHENTICATORS PRIOR TO DELIVERY\nThe organization requires developers/installers of information system components to provide unique authenticators or change default authenticators prior to delivery/installation.',
	},
	'IA-5 (6)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | PROTECTION OF AUTHENTICATORS\nThe organization protects authenticators commensurate with the security category of the information to which use of the authenticator permits access.',
	},
	'IA-5 (7)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | NO EMBEDDED UNENCRYPTED STATIC AUTHENTICATORS\nThe organization ensures that unencrypted static authenticators are not embedded in applications or access scripts or stored on function keys.',
	},
	'IA-5 (8)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | MULTIPLE INFORMATION SYSTEM ACCOUNTS\nThe organization implements [Assignment: organization-defined security safeguards] to manage the risk of compromise due to individuals having accounts on multiple information systems.',
	},
	'IA-5 (9)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | CROSS-ORGANIZATION CREDENTIAL MANAGEMENT\nThe organization coordinates with [Assignment: organization-defined external organizations] for cross-organization management of credentials.',
	},
	'IA-5 (10)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | DYNAMIC CREDENTIAL ASSOCIATION\nThe information system dynamically provisions identities.',
	},
	'IA-5 (11)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | HARDWARE TOKEN-BASED AUTHENTICATION\nThe information system, for hardware token-based authentication, employs mechanisms that satisfy [Assignment: organization-defined token quality requirements].',
	},
	'IA-5 (12)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | BIOMETRIC AUTHENTICATION\nThe information system, for biometric-based authentication, employs mechanisms that satisfy [Assignment: organization-defined biometric quality requirements].',
	},
	'IA-5 (13)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | EXPIRATION OF CACHED AUTHENTICATORS\nThe information system prohibits the use of cached authenticators after [Assignment: organization-defined time period].',
	},
	'IA-5 (14)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | MANAGING CONTENT OF PKI TRUST STORES\nThe organization, for PKI-based authentication, employs a deliberate organization-wide methodology for managing the content of PKI trust stores installed across all platforms including networks, operating systems, browsers, and applications.',
	},
	'IA-5 (15)': {
		family: 'IA',
		name: 'Authenticator Management',
		description:
			'AUTHENTICATOR MANAGEMENT | FICAM-APPROVED PRODUCTS AND SERVICES\nNot applicable to the GC.',
	},
	'IA-6': {
		family: 'IA',
		name: 'Authenticator Feedback',
		description:
			'(A) The information system obscures feedback of authentication information during the authentication process to protect the information from possible exploitation/use by unauthorized individuals.',
	},
	'IA-7': {
		family: 'IA',
		name: 'Cryptographic Module Authentication',
		description:
			'(A) The information system implements mechanisms for authentication to a cryptographic module that meet the requirements of applicable GC legislation and TBS policies, directives, and standards for such authentication.',
	},
	'IA-8': {
		family: 'IA',
		name: 'Identification And Authentication (Non-Organizational Users)',
		description:
			'(A) The information system uniquely identifies and authenticates non-organizational users (or processes acting on behalf of non-organizational users).',
	},
	'IA-8 (1)': {
		family: 'IA',
		name: 'Identification And Authentication (Non-Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | ACCEPTANCE OF PIV CREDENTIALS FROM OTHER AGENCIES',
	},
	'IA-8 (2)': {
		family: 'IA',
		name: 'Identification And Authentication (Non-Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | ACCEPTANCE OF THIRD-PARTY CREDENTIALS',
	},
	'IA-8 (3)': {
		family: 'IA',
		name: 'Identification And Authentication (Non-Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | USE OF FICAM-APPROVED PRODUCTS',
	},
	'IA-8 (4)': {
		family: 'IA',
		name: 'Identification And Authentication (Non-Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | USE OF FICAM-ISSUED PROFILES',
	},
	'IA-8 (5)': {
		family: 'IA',
		name: 'Identification And Authentication (Non-Organizational Users)',
		description:
			'IDENTIFICATION AND AUTHENTICATION | ACCEPTANCE OF PIV-I CREDENTIALS',
	},
	'IA-8 (100)': {
		family: 'IA',
		name: 'Identification And Authentication (Non-Organizational Users)',
		description:
			'In accordance with the TBS Standard on Identity and Credential Assurance (including Appendix B and C) [Reference 60], the organization determines the required identity and credential assurance levels and selects appropriate controls using the standardized assurance levels specified in Appendix B, and implements the minimum requirements for establishing an identity assurance level specified in Appendix C.\n',
	},
	'IA-9': {
		family: 'IA',
		name: 'Service Identification And Authentication',
		description:
			'(A) The organization identifies and authenticates [Assignment: organization-defined information system services] using [Assignment: organization-defined security safeguards].',
	},
	'IA-9 (1)': {
		family: 'IA',
		name: 'Service Identification And Authentication',
		description:
			'SERVICE IDENTIFICATION AND AUTHENTICATION | INFORMATION EXCHANGE\nThe organization ensures that service providers receive, validate, and transmit identification and authentication information.',
	},
	'IA-9 (2)': {
		family: 'IA',
		name: 'Service Identification And Authentication',
		description:
			'SERVICE IDENTIFICATION AND AUTHENTICATION | TRANSMISSION OF DECISIONS\nThe organization ensures that identification and authentication decisions are transmitted between [Assignment: organization-defined services] and are consistent with organizational policies.',
	},
	'IA-10': {
		family: 'IA',
		name: 'Adaptive Identification And Authentication',
		description:
			'(A) The organization requires that individuals accessing the information system employ [Assignment: organization-defined supplemental authentication techniques or mechanisms] under specific [Assignment: organization-defined circumstances or situations].',
	},
	'IA-11': {
		family: 'IA',
		name: 'Re-Authentication',
		description:
			'(A) The organization requires users and devices to re-authenticate when [Assignment: organization-defined circumstances or situations requiring re-authentication].',
	},
	'IR-1': {
		family: 'IR',
		name: 'Incident Response Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) An incident response policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the incident response policy and associated incident response controls.\n(B) The organization reviews and updates the current:\n(a) Incident response policy [Assignment: organization-defined frequency]; and\n(b) Incident response procedures [Assignment: organization-defined frequency].\n(AA) The organization’s incident response policy and procedures facilitate the incorporation of heightened levels of readiness during emergency and heightened IT threat situations in accordance with the TBS Operational Security Standard - Readiness Levels for Federal Government Facilities [Reference 12] and the TBS Operational Security Standard - Management of Information Technology Security [Reference 7]',
	},
	'IR-2': {
		family: 'IR',
		name: 'Incident Response Training',
		description:
			'(A) The organization provides incident response training to information system users consistent with assigned roles and responsibilities within [Assignment: organization-defined time period] of assuming an incident response role or responsibility.\n(B) The organization provides incident response training to information system users consistent with assigned roles and responsibilities when required by information system changes.\n(C) The organization provides incident response training to information system users consistent with assigned roles and responsibilities [Assignment: organization-defined frequency] thereafter.',
	},
	'IR-2 (1)': {
		family: 'IR',
		name: 'Incident Response Training',
		description:
			'INCIDENT RESPONSE TRAINING | SIMULATED EVENTS\nThe organization incorporates simulated events into incident response training to facilitate effective response by personnel in crisis situations.',
	},
	'IR-2 (2)': {
		family: 'IR',
		name: 'Incident Response Training',
		description:
			'INCIDENT RESPONSE TRAINING | AUTOMATED TRAINING ENVIRONMENTS\nThe organization employs automated mechanisms to provide a more thorough and realistic incident response training environment.',
	},
	'IR-3': {
		family: 'IR',
		name: 'Incident Response Testing And Exercises',
		description:
			'(A) The organization tests the incident response capability for the information system [Assignment: organization-defined frequency] using [Assignment: organization-defined tests] to determine the incident response effectiveness and documents the results.',
	},
	'IR-3 (1)': {
		family: 'IR',
		name: 'Incident Response Testing And Exercises',
		description:
			'INCIDENT RESPONSE TESTING | AUTOMATED TESTING\nThe organization employs automated mechanisms to more thoroughly and effectively test the incident response capability.',
	},
	'IR-3 (2)': {
		family: 'IR',
		name: 'Incident Response Testing And Exercises',
		description:
			'INCIDENT RESPONSE TESTING | COORDINATION WITH RELATED PLANS\nThe organization coordinates incident response testing with organizational elements responsible for related plans.',
	},
	'IR-4': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'(A) The organization implements an incident handling capability for security incidents that includes preparation, detection and analysis, containment, eradication, and recovery.\n(B) The organization coordinates incident handling activities with contingency planning activities.\n(C) The organization incorporates lessons learned from ongoing incident handling activities into incident response procedures, training, and testing/exercises, and implements the resulting changes accordingly.',
	},
	'IR-4 (1)': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'INCIDENT HANDLING | AUTOMATED INCIDENT HANDLING PROCESSES\nThe organization employs automated mechanisms to support the incident handling process.',
	},
	'IR-4 (2)': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'INCIDENT HANDLING | DYNAMIC RECONFIGURATION\nThe organization includes dynamic reconfiguration of [Assignment: organization-defined information system components] as part of the incident response capability.',
	},
	'IR-4 (3)': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'INCIDENT HANDLING | CONTINUITY OF OPERATIONS\nThe organization identifies [Assignment: organization-defined classes of incidents] and [Assignment: organization-defined actions to take in response to classes of incidents] to ensure continuation of organizational missions and business functions.',
	},
	'IR-4 (4)': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'INCIDENT HANDLING | INFORMATION CORRELATION\nThe organization correlates incident information and individual incident responses to achieve an organization-wide perspective on incident awareness and response.',
	},
	'IR-4 (5)': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'INCIDENT HANDLING | AUTOMATIC DISABLING OF INFORMATION SYSTEM\nThe organization implements a configurable capability to automatically disable the information system if [Assignment: organization-defined security violations] are detected.',
	},
	'IR-4 (6)': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'INCIDENT HANDLING | INSIDER THREATS - SPECIFIC CAPABILITIES\nThe organization implements incident handling capability for insider threats.',
	},
	'IR-4 (7)': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'INCIDENT HANDLING | INSIDER THREATS - INTRA-ORGANIZATION COORDINATION\nThe organization coordinates incident handling capability for insider threats across [Assignment: organization-defined components or elements of the organization].',
	},
	'IR-4 (8)': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'INCIDENT HANDLING | CORRELATION WITH EXTERNAL ORGANIZATIONS\nThe organization coordinates with [Assignment: organization-defined external organizations] to correlate and share [Assignment: organization-defined incident information] to achieve a cross-organization perspective on incident awareness and more effective incident responses.',
	},
	'IR-4 (9)': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'INCIDENT HANDLING | DYNAMIC RESPONSE CAPABILITY\nThe organization employs [Assignment: organization-defined dynamic response capabilities] to effectively respond to security incidents.',
	},
	'IR-4 (10)': {
		family: 'IR',
		name: 'Incident Handling',
		description:
			'INCIDENT HANDLING | SUPPLY CHAIN COORDINATION\nThe organization coordinates incident handling activities involving supply chain events with other organizations involved in the supply chain.',
	},
	'IR-5': {
		family: 'IR',
		name: 'Incident Monitoring',
		description:
			'(A) The organization tracks and documents information system security incidents.',
	},
	'IR-5 (1)': {
		family: 'IR',
		name: 'Incident Monitoring',
		description:
			'INCIDENT MONITORING | AUTOMATED TRACKING / DATA COLLECTION / ANALYSIS\nThe organization employs automated mechanisms to assist in the tracking of security incidents and in the collection and analysis of incident information.',
	},
	'IR-6': {
		family: 'IR',
		name: 'Incident Reporting',
		description:
			'(A) The organization requires personnel to report suspected security incidents to the organizational incident response capability within [Assignment: organization-defined time period].\n(B) The organization reports security incident information to [Assignment: organization-defined authorities].',
	},
	'IR-6 (1)': {
		family: 'IR',
		name: 'Incident Reporting',
		description:
			'INCIDENT REPORTING | AUTOMATED REPORTING\nThe organization employs automated mechanisms to assist in the reporting of security incidents.',
	},
	'IR-6 (2)': {
		family: 'IR',
		name: 'Incident Reporting',
		description:
			'INCIDENT REPORTING | VULNERABILITIES RELATED TO INCIDENTS\nThe organization reports information system vulnerabilities associated with reported security incidents to [Assignment: organization-defined personnel or roles].',
	},
	'IR-6 (3)': {
		family: 'IR',
		name: 'Incident Reporting',
		description:
			'INCIDENT REPORTING | COORDINATION WITH SUPPLY CHAIN\nThe organization provides security incident information to other organizations involved in the supply chain for information systems or information system components related to the incident.',
	},
	'IR-7': {
		family: 'IR',
		name: 'Incident Response Assistance',
		description:
			'(A) The organization provides an incident response support resource, integral to the organizational incident response capability that offers advice and assistance to users of the information system for the handling and reporting of security incidents.',
	},
	'IR-7 (1)': {
		family: 'IR',
		name: 'Incident Response Assistance',
		description:
			'INCIDENT RESPONSE ASSISTANCE | AUTOMATION SUPPORT FOR AVAILABILITY OF INFORMATION / SUPPORT\nThe organization employs automated mechanisms to increase the availability of incident response-related information and support.',
	},
	'IR-7 (2)': {
		family: 'IR',
		name: 'Incident Response Assistance',
		description:
			'INCIDENT RESPONSE ASSISTANCE | COORDINATION WITH EXTERNAL PROVIDERS\n(a) The organization establishes a direct, cooperative relationship between its incident response capability and external providers of information system protection capability; and\n(b) The organization identifies organizational incident response team members to the external providers.',
	},
	'IR-8': {
		family: 'IR',
		name: 'Incident Response Plan',
		description:
			'(A) The organization develops an incident response plan that:\n(a) Provides the organization with a roadmap for implementing its incident response capability;\n(b) Describes the structure and organization of the incident response capability;\n(c) Provides a high-level approach for how the incident response capability fits into the overall organization;\n(d) Meets the unique requirements of the organization, which relate to mission, size, structure, and functions;\n(e) Defines reportable incidents;\n(f) Provides metrics for measuring the incident response capability within the organization;\n(g) Defines the resources and management support needed to effectively maintain and mature an incident response capability; and\n(h) Is reviewed and approved by [Assignment: organization-defined personnel or roles].\n(B) The organization distributes copies of the incident response plan to [Assignment: organization-defined incident response personnel (identified by name and/or by role) and organizational elements].\n(C) The organization reviews the incident response plan [Assignment: organization-defined frequency].\n(D) The organization updates the incident response plan to address system/organizational changes or problems encountered during plan implementation, execution, or testing.\n(E) The organization communicates incident response plan changes to [Assignment: organization-defined incident response personnel (identified by name and/or by role) and organizational elements].\n(F) The organization protects the incident response plan from unauthorized disclosure and modification.',
	},
	'IR-9': {
		family: 'IR',
		name: 'Information Spillage Response',
		description:
			'(A) The organization responds to information spills by identifying the specific information involved in the information system contamination.\n(B) The organization responds to information spills by alerting [Assignment: organization-defined personnel or roles] of the information spill using a method of communication not associated with the spill.\n(C) The organization responds to information spills by isolating the contaminated information system or system component.\n(D) The organization responds to information spills by eradicating the information from the contaminated information system or component.\n(E) The organization responds to information spills by identifying other information systems or system components that may have been subsequently contaminated.\n(F) The organization responds to information spills by performing other [Assignment: organization-defined actions].',
	},
	'IR-9 (1)': {
		family: 'IR',
		name: 'Information Spillage Response',
		description:
			'INFORMATION SPILLAGE RESPONSE | RESPONSIBLE PERSONNEL\nThe organization assigns [Assignment: organization-defined personnel or roles] with responsibility for responding to information spills.',
	},
	'IR-9 (2)': {
		family: 'IR',
		name: 'Information Spillage Response',
		description:
			'INFORMATION SPILLAGE RESPONSE | TRAINING\nThe organization provides information spillage response training [Assignment: organization-defined frequency].',
	},
	'IR-9 (3)': {
		family: 'IR',
		name: 'Information Spillage Response',
		description:
			'INFORMATION SPILLAGE RESPONSE | POST-SPILL OPERATIONS\nThe organization implements [Assignment: organization-defined procedures] to ensure that organizational personnel impacted by information spills can continue to carry out assigned tasks while contaminated systems are undergoing corrective actions.',
	},
	'IR-9 (4)': {
		family: 'IR',
		name: 'Information Spillage Response',
		description:
			'INFORMATION SPILLAGE RESPONSE | EXPOSURE TO UNAUTHORIZED PERSONNEL\nThe organization employs [Assignment: organization-defined security safeguards] for personnel exposed to information not within assigned access authorizations.',
	},
	'IR-10': {
		family: 'IR',
		name: 'Integrated Information Security Analysis Team',
		description:
			'(A) The organization establishes an integrated team of forensic/malicious code analysts, tool developers, and real-time operations personnel.',
	},
	'MA-1': {
		family: 'MA',
		name: 'System Maintenance Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A system maintenance policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the system maintenance policy and associated system maintenance controls.\n(B) The organization reviews and updates the current:\n(a) System maintenance policy [Assignment: organization-defined frequency]; and\n(b) System maintenance procedures [Assignment: organization-defined frequency].',
	},
	'MA-2': {
		family: 'MA',
		name: 'Controlled Maintenance',
		description:
			'(A) The organization schedules, performs, documents, and reviews records of maintenance and repairs on information system components in accordance with manufacturer or vendor specifications and/or organizational requirements.\n(B) The organization approves and monitors all maintenance activities, whether performed on site or remotely and whether the equipment is serviced on site or removed to another location.\n(C) The organization requires that [Assignment: organization-defined personnel or roles] explicitly approve the removal of the information system or system components from organizational facilities for off-site maintenance or repairs.\n(D) The organization sanitizes equipment to remove all information from associated media prior to removal from organizational facilities for off-site maintenance or repairs.\n(E) The organization checks all potentially impacted security controls to verify that the controls are still functioning properly following maintenance or repair actions.\n(F) The organization includes [Assignment: organization-defined maintenance-related information] in organizational maintenance records.',
	},
	'MA-2 (1)': {
		family: 'MA',
		name: 'Controlled Maintenance',
		description: 'CONTROLLED MAINTENANCE | RECORD CONTENT',
	},
	'MA-2 (2)': {
		family: 'MA',
		name: 'Controlled Maintenance',
		description:
			'CONTROLLED MAINTENANCE | AUTOMATED MAINTENANCE ACTIVITIES\n(a) The organization employs automated mechanisms to schedule, conduct, and document maintenance and repairs; and\n(b) The organization produces up-to date, accurate, and complete records of all maintenance and repair actions requested, scheduled, in process, and completed.',
	},
	'MA-3': {
		family: 'MA',
		name: 'Maintenance Tools',
		description:
			'(A) The organization approves, controls, and monitors information system maintenance tools.',
	},
	'MA-3 (1)': {
		family: 'MA',
		name: 'Maintenance Tools',
		description:
			'MAINTENANCE TOOLS | INSPECT TOOLS\nThe organization inspects the maintenance tools carried into a facility by maintenance personnel for improper or unauthorized modifications.',
	},
	'MA-3 (2)': {
		family: 'MA',
		name: 'Maintenance Tools',
		description:
			'MAINTENANCE TOOLS | INSPECT MEDIA\nThe organization checks media containing diagnostic and test programs for malicious code before the media are used in the information system.',
	},
	'MA-3 (3)': {
		family: 'MA',
		name: 'Maintenance Tools',
		description:
			'MAINTENANCE TOOLS | PREVENT UNAUTHORIZED REMOVAL\nThe organization prevents the unauthorized removal of maintenance equipment containing organizational information by:\n(a) Verifying that there is no organizational information contained on the equipment;\n(b) Sanitizing or destroying the equipment;\n(c) Retaining the equipment within the facility; or\n(d) Obtaining an exemption from [Assignment: organization-defined personnel or roles] explicitly authorizing removal of the equipment from the facility.',
	},
	'MA-3 (4)': {
		family: 'MA',
		name: 'Maintenance Tools',
		description:
			'MAINTENANCE TOOLS | RESTRICTED TOOL USE\nThe information system restricts the use of maintenance tools to authorized personnel only.',
	},
	'MA-4': {
		family: 'MA',
		name: 'Non-Local Maintenance',
		description:
			'(A) The organization approves and monitors nonlocal maintenance and diagnostic activities.\n(B) The organization allows the use of non-local maintenance and diagnostic tools only as consistent with organizational policy and as documented in the security plan for the information system.\n(C) The organization employs strong authenticators in the establishment of nonlocal maintenance and diagnostic sessions.\n(D) The organization maintains records for nonlocal maintenance and diagnostic activities.',
	},
	'MA-4 (1)': {
		family: 'MA',
		name: 'Non-Local Maintenance',
		description:
			'NONLOCAL MAINTENANCE | AUDITING AND REVIEW\n(a) The organization audits nonlocal maintenance and diagnostic sessions [Assignment: organization-defined audit events]; and\n(b) The organization reviews the records of the maintenance and diagnostic sessions.',
	},
	'MA-4 (2)': {
		family: 'MA',
		name: 'Non-Local Maintenance',
		description:
			'NONLOCAL MAINTENANCE | DOCUMENT NONLOCAL MAINTENANCE\nThe organization documents in the security plan for the information system, the policies and procedures for the establishment and use of nonlocal maintenance and diagnostic connections.',
	},
	'MA-4 (3)': {
		family: 'MA',
		name: 'Non-Local Maintenance',
		description:
			'NONLOCAL MAINTENANCE | COMPARABLE SECURITY / SANITIZATION\n(a) The organization requires that nonlocal maintenance and diagnostic services be performed from an information system that implements a security capability comparable to the capability implemented on the system being serviced; or\n(b) The organization removes the component to be serviced from the information system and prior to nonlocal maintenance or diagnostic services, sanitizes the component (with regard to organizational information) before removal from organizational facilities, and after the service is performed, inspects and sanitizes the component (with regard to potentially malicious software) before reconnecting the component to the information system.',
	},
	'MA-4 (4)': {
		family: 'MA',
		name: 'Non-Local Maintenance',
		description:
			'NONLOCAL MAINTENANCE | AUTHENTICATION / SEPARATION OF MAINTENANCE SESSIONS\n(a) The organization protects nonlocal maintenance sessions by employing [Assignment: organization-defined authenticators that are replay resistant]; and\n(b) The organization protects nonlocal maintenance sessions by separating the maintenance sessions from other network sessions with the information system by either:\n- Physically separated communications paths; or\n- Logically separated communications paths based upon encryption compliant with the requirements of control SC-13.',
	},
	'MA-4 (5)': {
		family: 'MA',
		name: 'Non-Local Maintenance',
		description:
			'NONLOCAL MAINTENANCE | APPROVALS AND NOTIFICATIONS\n(a) The organization requires the approval of each nonlocal maintenance session by [Assignment: organization-defined personnel or roles]; and\n(b) The organization notifies [Assignment: organization-defined personnel or roles] of the date and time of planned nonlocal maintenance.',
	},
	'MA-4 (6)': {
		family: 'MA',
		name: 'Non-Local Maintenance',
		description:
			'NONLOCAL MAINTENANCE | CRYPTOGRAPHIC PROTECTION\nThe information system implements cryptographic mechanisms to protect the integrity and confidentiality of nonlocal maintenance and diagnostic communications.',
	},
	'MA-4 (7)': {
		family: 'MA',
		name: 'Non-Local Maintenance',
		description:
			'NONLOCAL MAINTENANCE | REMOTE DISCONNECT VERIFICATION\nThe information system implements remote disconnect verification at the termination of nonlocal maintenance and diagnostic sessions.\n',
	},
	'MA-5': {
		family: 'MA',
		name: 'Maintenance Personnel',
		description:
			'(A) The organization establishes a process for maintenance personnel authorization and maintains a list of authorized maintenance organizations or personnel.\n(B) The organization ensures that non-escorted personnel performing maintenance on the information system have required access authorizations.\n(C) The organization designates organizational personnel with required access authorizations and technical competence to supervise the maintenance activities of personnel who do not possess the required access authorizations.',
	},
	'MA-5 (1)': {
		family: 'MA',
		name: 'Maintenance Personnel',
		description:
			'MAINTENANCE PERSONNEL | INDIVIDUALS WITHOUT APPROPRIATE ACCESS\n(a) The organization implements procedures for the use of maintenance personnel that lack appropriate security clearances or are not Canadian citizens, that include the following requirements:\n- Maintenance personnel who do not have needed access authorizations, clearances, or formal access approvals are escorted and supervised during the performance of maintenance and diagnostic activities on the information system by approved organizational personnel who are fully cleared, have appropriate access authorizations, and are technically qualified;\n- Prior to initiating maintenance or diagnostic activities by personnel who do not have needed access authorizations, clearances or formal access approvals, all volatile information storage components within the information system are sanitized and all non-volatile storage media are removed or physically disconnected from the system and secured; and\n(b) The organization develops and implements alternate security safeguards in the event an information system component cannot be sanitized, removed, or disconnected from the system.',
	},
	'MA-5 (2)': {
		family: 'MA',
		name: 'Maintenance Personnel',
		description:
			'MAINTENANCE PERSONNEL | SECURITY CLEARANCES FOR CLASSIFIED SYSTEMS\nThe organization ensures that personnel performing maintenance and diagnostic activities on an information system processing, storing, or transmitting classified information possess security clearances and formal access approvals for at least the highest classification level and for all compartments of information on the system.',
	},
	'MA-5 (3)': {
		family: 'MA',
		name: 'Maintenance Personnel',
		description:
			'MAINTENANCE PERSONNEL | CITIZENSHIP REQUIREMENTS FOR CLASSIFIED SYSTEMS\nThe organization ensures that personnel performing maintenance and diagnostic activities on an information system processing, storing, or transmitting classified information are Canadian citizens.',
	},
	'MA-5 (4)': {
		family: 'MA',
		name: 'Maintenance Personnel',
		description:
			'MAINTENANCE PERSONNEL | FOREIGN NATIONALS\n(a) The organization ensures that cleared foreign nationals (i.e., foreign nationals with appropriate security clearances), are used to conduct maintenance and diagnostic activities on classified information systems only when the systems are jointly owned and operated by the Canadian government and foreign allied governments, or owned and operated solely by foreign allied governments; and\n(b) The organization ensures that approvals, consents, and detailed operational conditions regarding the use of foreign nationals to conduct maintenance and diagnostic activities on classified information systems are fully documented within Memoranda of Agreements.',
	},
	'MA-5 (5)': {
		family: 'MA',
		name: 'Maintenance Personnel',
		description:
			'MAINTENANCE PERSONNEL | NONSYSTEM-RELATED MAINTENANCE\nThe organization ensures that non-escorted personnel performing maintenance activities not directly associated with the information system but in the physical proximity of the system, have required access authorizations.',
	},
	'MA-6': {
		family: 'MA',
		name: 'Timely Maintenance',
		description:
			'(A) The organization obtains maintenance support and/or spare parts for [Assignment: organization-defined information system components] within [Assignment: organization-defined time period] of failure.',
	},
	'MA-6 (1)': {
		family: 'MA',
		name: 'Timely Maintenance',
		description:
			'TIMELY MAINTENANCE | PREVENTIVE MAINTENANCE\nThe organization performs preventive maintenance on [Assignment: organization-defined information system components] at [Assignment: organization-defined time intervals].',
	},
	'MA-6 (2)': {
		family: 'MA',
		name: 'Timely Maintenance',
		description:
			'TIMELY MAINTENANCE | PREDICTIVE MAINTENANCE\nThe organization performs predictive maintenance on [Assignment: organization-defined information system components] at [Assignment: organization-defined time intervals].',
	},
	'MA-6 (3)': {
		family: 'MA',
		name: 'Timely Maintenance',
		description:
			'TIMELY MAINTENANCE | AUTOMATED SUPPORT FOR PREDICTIVE MAINTENANCE\nThe organization employs automated mechanisms to transfer predictive maintenance data to a computerized maintenance management system.',
	},
	'MP-1': {
		family: 'MP',
		name: 'Media Protection Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A media protection policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the media protection policy and associated media protection controls.\n(B) The organization reviews and updates the current:\n(a) Media protection policy [Assignment: organization-defined frequency]; and\n(b) Media protection procedures [Assignment: organization-defined frequency].',
	},
	'MP-2': {
		family: 'MP',
		name: 'Media Access',
		description:
			'(A) The organization restricts access to [Assignment: organization-defined types of digital and/or non-digital media] to [Assignment: organization-defined personnel or roles].',
	},
	'MP-2 (1)': {
		family: 'MP',
		name: 'Media Access',
		description: 'MEDIA ACCESS | AUTOMATED RESTRICTED ACCESS',
	},
	'MP-2 (2)': {
		family: 'MP',
		name: 'Media Access',
		description: 'MEDIA ACCESS | CRYPTOGRAPHIC PROTECTION',
	},
	'MP-3': {
		family: 'MP',
		name: 'Media Marking',
		description:
			'(A) The organization marks information system media indicating the distribution limitations, handling caveats, and applicable security markings (if any) of the information.\n(B) The organization exempts [Assignment: organization-defined types of information system media] from marking as long as the media remain within [Assignment: organization-defined controlled areas].',
	},
	'MP-4': {
		family: 'MP',
		name: 'Media Storage',
		description:
			'(A) The organization physically controls and securely stores [Assignment: organization-defined types of digital and/or non-digital media] within [Assignment: organization-defined controlled areas] and in accordance with the RCMP G1-001, Security Equipment Guide [Reference 15].\n(B) The organization protects information system media until the media are destroyed or sanitized using approved equipment, techniques, and procedures.',
	},
	'MP-4 (1)': {
		family: 'MP',
		name: 'Media Storage',
		description: 'MEDIA STORAGE | CRYPTOGRAPHIC PROTECTION',
	},
	'MP-4 (2)': {
		family: 'MP',
		name: 'Media Storage',
		description:
			'MEDIA STORAGE | AUTOMATED RESTRICTED ACCESS\nThe organization employs automated mechanisms to restrict access to media storage areas and to audit access attempts and access granted.',
	},
	'MP-5': {
		family: 'MP',
		name: 'Media Transport',
		description:
			'(A) The organization protects and controls [Assignment: organization-defined types of information system media] during transport outside of controlled areas using [Assignment: organization-defined security safeguards] in accordance with TBS Operational Security Standard on Physical Security [Reference 6] and the RCMP G1-009, Transport and Transmittal of Protected and Classified Information [Reference 17].\n(B) The organization maintains accountability for information system media during transport outside of controlled areas.\n(C) The organization documents activities associated with the transport of information system media.\n(D) The organization restricts the activities associated with the transport of information system media to authorized personnel.',
	},
	'MP-5 (1)': {
		family: 'MP',
		name: 'Media Transport',
		description: 'MEDIA TRANSPORT | PROTECTION OUTSIDE OF CONTROLLED AREAS',
	},
	'MP-5 (2)': {
		family: 'MP',
		name: 'Media Transport',
		description: 'MEDIA TRANSPORT | DOCUMENTATION OF ACTIVITIES',
	},
	'MP-5 (3)': {
		family: 'MP',
		name: 'Media Transport',
		description:
			'MEDIA TRANSPORT | CUSTODIANS\nThe organization employs an identified custodian during transport of information system media outside of controlled areas.',
	},
	'MP-5 (4)': {
		family: 'MP',
		name: 'Media Transport',
		description:
			'MEDIA TRANSPORT | CRYPTOGRAPHIC PROTECTION\nThe information system implements cryptographic mechanisms compliant with the requirements of Control SC-13 to protect the confidentiality and integrity of information stored on digital media during transport outside of controlled areas.',
	},
	'MP-6': {
		family: 'MP',
		name: 'Media Sanitization',
		description:
			'(A) The organization sanitizes [Assignment: organization-defined information system media] prior to disposal, release out of organizational control, or release for reuse using [Assignment: organization-defined sanitization techniques and procedures] in accordance with applicable GC and organizational standards and policies.\n(B) The organization employs sanitization mechanisms with the strength and integrity commensurate with the security category or classification of the information.',
	},
	'MP-6 (1)': {
		family: 'MP',
		name: 'Media Sanitization',
		description:
			'MEDIA SANITIZATION | REVIEW / APPROVE / TRACK / DOCUMENT / VERIFY\nThe organization reviews, approves, tracks, documents, and verifies media sanitization and disposal actions.',
	},
	'MP-6 (2)': {
		family: 'MP',
		name: 'Media Sanitization',
		description:
			'MEDIA SANITIZATION | EQUIPMENT TESTING\nThe organization tests sanitization equipment and procedures [Assignment: organization-defined frequency] to verify that the intended sanitization is being achieved.',
	},
	'MP-6 (3)': {
		family: 'MP',
		name: 'Media Sanitization',
		description:
			'MEDIA SANITIZATION | NONDESTRUCTIVE TECHNIQUES\nThe organization applies non-destructive sanitization techniques to portable storage devices prior to connecting such devices to the information system under the following circumstances: [Assignment: organization-defined circumstances requiring sanitization of portable storage devices].',
	},
	'MP-6 (4)': {
		family: 'MP',
		name: 'Media Sanitization',
		description: 'MEDIA SANITIZATION | CONTROLLED UNCLASSIFIED INFORMATION',
	},
	'MP-6 (5)': {
		family: 'MP',
		name: 'Media Sanitization',
		description: 'MEDIA SANITIZATION | CLASSIFIED INFORMATION',
	},
	'MP-6 (6)': {
		family: 'MP',
		name: 'Media Sanitization',
		description: 'MEDIA SANITIZATION | MEDIA DESTRUCTION',
	},
	'MP-6 (7)': {
		family: 'MP',
		name: 'Media Sanitization',
		description:
			'MEDIA SANITIZATION | DUAL AUTHORIZATION\nThe organization enforces dual authorization for the sanitization of [Assignment: organization-defined information system media].',
	},
	'MP-6 (8)': {
		family: 'MP',
		name: 'Media Sanitization',
		description:
			'MEDIA SANITIZATION | REMOTE PURGING / WIPING OF INFORMATION\nThe organization provides the capability to purge/wipe information from [Assignment: organization-defined information systems, system components, or devices] either remotely or under the following conditions: [Assignment: organization-defined conditions].',
	},
	'MP-7': {
		family: 'MP',
		name: 'Media Use',
		description:
			'(A) The organization [Selection: restricts; prohibits] the use of [Assignment: organization-defined types of information system media] on [Assignment: organization-defined information systems or system components] using [Assignment: organization-defined security safeguards].',
	},
	'MP-7 (1)': {
		family: 'MP',
		name: 'Media Use',
		description:
			'MEDIA USE | PROHIBIT USE WITHOUT OWNER\nThe organization prohibits the use of portable storage devices in organizational information systems when such devices have no identifiable owner.',
	},
	'MP-7 (2)': {
		family: 'MP',
		name: 'Media Use',
		description:
			'MEDIA USE | PROHIBIT USE OF SANITIZATION-RESISTANT MEDIA\nThe organization prohibits the use of sanitization-resistant media in organizational information systems.',
	},
	'MP-8': {
		family: 'MP',
		name: 'Media Downgrading',
		description:
			'(A) The organization establishes [Assignment: organization-defined information system media downgrading process] that includes employing downgrading mechanisms with [Assignment: organization-defined strength and integrity].\n(B) The organization ensures that the information system media downgrading process is commensurate with the security category and/or classification level of the information to be removed and the access authorizations of the potential recipients of the downgraded information.\n(C) The organization identifies [Assignment: organization-defined information system media requiring downgrading].\n(D) The organization downgrades the identified information system media using the established process.',
	},
	'MP-8 (1)': {
		family: 'MP',
		name: 'Media Downgrading',
		description:
			'MEDIA DOWNGRADING | DOCUMENTATION OF PROCESS\nThe organization documents information system media downgrading actions.',
	},
	'MP-8 (2)': {
		family: 'MP',
		name: 'Media Downgrading',
		description:
			'MEDIA DOWNGRADING | EQUIPMENT TESTING\nThe organization employs [Assignment: organization-defined tests] of downgrading equipment and procedures to verify correct performance [Assignment: organization-defined frequency].',
	},
	'MP-8 (3)': {
		family: 'MP',
		name: 'Media Downgrading',
		description:
			'MEDIA DOWNGRADING | CONTROLLED UNCLASSIFIED INFORMATION\nThe organization downgrades information system media containing [Assignment: organization-defined Protected Information] prior to public release in accordance with applicable GC and organizational standards and policies.',
	},
	'MP-8 (4)': {
		family: 'MP',
		name: 'Media Downgrading',
		description:
			'MEDIA DOWNGRADING | CLASSIFIED INFORMATION\nThe organization downgrades information system media containing classified information prior to release to individuals without required access authorizations in accordance with GC standards and policies.',
	},
	'PE-1': {
		family: 'PE',
		name: 'Physical And Environmental Protection Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A physical and environmental protection policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the physical and environmental protection policy and associated physical and environmental protection controls.\n(B) The organization reviews and updates the current:\n(a) Physical and environmental protection policy [Assignment: organization-defined frequency]; and\n(b) Physical and environmental protection procedures [Assignment: organization-defined frequency].',
	},
	'PE-2': {
		family: 'PE',
		name: 'Physical Access Authorizations',
		description:
			'(A) The organization develops, approves, and maintains a list of individuals with authorized access to the facility where the information system resides.\n(B) The organization issues authorization credentials for facility access.\n(C) The organization reviews the access list detailing authorized facility access by individuals [Assignment: organization-defined frequency].\n(D) The organization removes individuals from the facility access list when access is no longer required.',
	},
	'PE-2 (1)': {
		family: 'PE',
		name: 'Physical Access Authorizations',
		description:
			'PHYSICAL ACCESS AUTHORIZATIONS | ACCESS BY POSITION / ROLE\nThe organization authorizes physical access to the facility where the information system resides based on position or role.',
	},
	'PE-2 (2)': {
		family: 'PE',
		name: 'Physical Access Authorizations',
		description:
			'PHYSICAL ACCESS AUTHORIZATIONS | TWO FORMS OF IDENTIFICATION\nThe organization requires two forms of identification from [Assignment: organization-defined list of acceptable forms of identification] for visitor access to the facility where the information system resides.',
	},
	'PE-2 (3)': {
		family: 'PE',
		name: 'Physical Access Authorizations',
		description:
			'PHYSICAL ACCESS AUTHORIZATIONS | RESTRICT UNESCORTED ACCESS\nThe organization restricts unescorted access to the facility where the information system resides to personnel with [Selection (one or more): security clearances for all information contained within the system; formal access authorizations for all information contained within the system; need for access to all information contained within the system; [Assignment: organization-defined credentials]].',
	},
	'PE-2 (100)': {
		family: 'PE',
		name: 'Physical Access Authorizations',
		description:
			"The organization issues an identification card to all personnel, which as a minimum includes the name of the organization, the bearer's name and photo, a unique card number and an expiry date.",
	},
	'PE-3': {
		family: 'PE',
		name: 'Physical Access Control',
		description:
			'(A) The organization enforces physical access authorizations at [Assignment: organization-defined entry/exit points to the facility where the information system resides] by:\n(a) Verifying individual access authorizations before granting access to the facility; and\n(b) Controlling ingress/egress to the facility using [Selection (one or more): [Assignment: organization-defined physical access control systems/devices]; guards];\n(B) The organization maintains physical access audit logs for [Assignment: organization-defined entry/exit points].\n(C) The organization provides [Assignment: organization-defined security safeguards] to control access to areas within the facility officially designated as publicly accessible.\n(D) The organization escorts visitors and monitors visitor activity [Assignment: organization-defined circumstances requiring visitor escorts and monitoring].\n(E) The organization secures keys, combinations, and other physical access devices.\n(F) The organization inventories [Assignment: organization-defined physical access devices] every [Assignment: organization-defined frequency].\n(G) The organization changes combinations and keys [Assignment: organization-defined frequency] and/or when keys are lost, combinations are compromised, or individuals are transferred or terminated.',
	},
	'PE-3 (1)': {
		family: 'PE',
		name: 'Physical Access Control',
		description:
			'PHYSICAL ACCESS CONTROL | INFORMATION SYSTEM ACCESS\nThe organization enforces physical access authorizations to the information system in addition to the physical access controls for the facility at [Assignment: organization-defined physical spaces containing one or more components of the information system].',
	},
	'PE-3 (2)': {
		family: 'PE',
		name: 'Physical Access Control',
		description:
			'PHYSICAL ACCESS CONTROL | FACILITY / INFORMATION SYSTEM BOUNDARIES\nThe organization performs security checks [Assignment: organization-defined frequency] at the physical boundary of the facility or information system for unauthorized exfiltration of information or removal of information system components.',
	},
	'PE-3 (3)': {
		family: 'PE',
		name: 'Physical Access Control',
		description:
			'PHYSICAL ACCESS CONTROL | CONTINUOUS GUARDS / ALARMS / MONITORING\nThe organization employs guards and/or alarms to monitor every physical access point to the facility where the information system resides 24 hours per day, 7 days per week.',
	},
	'PE-3 (4)': {
		family: 'PE',
		name: 'Physical Access Control',
		description:
			'PHYSICAL ACCESS CONTROL | LOCKABLE CASINGS\nThe organization uses lockable physical casings to protect [Assignment: organization-defined information system components] from unauthorized physical access.',
	},
	'PE-3 (5)': {
		family: 'PE',
		name: 'Physical Access Control',
		description:
			'PHYSICAL ACCESS CONTROL | TAMPER PROTECTION\nThe organization employs [Assignment: organization-defined security safeguards] to [Selection (one or more): detect; prevent] physical tampering or alteration of [Assignment: organization-defined hardware components] within the information system.',
	},
	'PE-3 (6)': {
		family: 'PE',
		name: 'Physical Access Control',
		description:
			'PHYSICAL ACCESS CONTROL | FACILITY PENETRATION TESTING\nThe organization employs a penetration testing process that includes [Assignment: organization-defined frequency], unannounced attempts to bypass or circumvent security controls associated with physical access points to the facility.',
	},
	'PE-4': {
		family: 'PE',
		name: 'Access Control For Transmission Medium',
		description:
			'(A) The organization controls physical access to [Assignment: organization-defined information system distribution and transmission lines] within organizational facilities using [Assignment: organization-defined security safeguards].',
	},
	'PE-5': {
		family: 'PE',
		name: 'Access Control For Output Devices',
		description:
			'(A) The organization controls physical access to information system output devices to prevent unauthorized individuals from obtaining the output.',
	},
	'PE-5 (1)': {
		family: 'PE',
		name: 'Access Control For Output Devices',
		description:
			'ACCESS CONTROL FOR OUTPUT DEVICES | ACCESS TO OUTPUT BY AUTHORIZED INDIVIDUALS\n(a) The organization controls physical access to output from [Assignment: organization-defined output devices]; and\n(b) The organization ensures that only authorized individuals receive output from the device.',
	},
	'PE-5 (2)': {
		family: 'PE',
		name: 'Access Control For Output Devices',
		description:
			'ACCESS CONTROL FOR OUTPUT DEVICES | ACCESS TO OUTPUT BY INDIVIDUAL IDENTITY\n(a) The information system controls physical access to output from [Assignment: organization-defined output devices]; and\n(b) The information system links individual identity to receipt of the output from the device.',
	},
	'PE-5 (3)': {
		family: 'PE',
		name: 'Access Control For Output Devices',
		description:
			'ACCESS CONTROL FOR OUTPUT DEVICES | MARKING OUTPUT DEVICES\nThe organization marks [Assignment: organization-defined information system output devices] indicating the appropriate security marking of the information permitted to be output from the device.',
	},
	'PE-6': {
		family: 'PE',
		name: 'Monitoring Physical Access',
		description:
			'(A) The organization monitors physical access to the facility where the information system resides to detect and respond to physical security incidents.\n(B) The organization reviews physical access logs [Assignment: organization-defined frequency] and upon occurrence of [Assignment: organization-defined events or potential indications of events].\n(C) The organization coordinates results of reviews and investigations with the organizational incident response capability.',
	},
	'PE-6 (1)': {
		family: 'PE',
		name: 'Monitoring Physical Access',
		description:
			'MONITORING PHYSICAL ACCESS | INTRUSION ALARMS / SURVEILLANCE EQUIPMENT\nThe organization monitors physical intrusion alarms and surveillance equipment.',
	},
	'PE-6 (2)': {
		family: 'PE',
		name: 'Monitoring Physical Access',
		description:
			'MONITORING PHYSICAL ACCESS | AUTOMATED INTRUSION RECOGNITION / RESPONSES\nThe organization employs automated mechanisms to recognize [Assignment: organization-defined classes/types of intrusions] and initiate [Assignment: organization-defined response actions].',
	},
	'PE-6 (3)': {
		family: 'PE',
		name: 'Monitoring Physical Access',
		description:
			'MONITORING PHYSICAL ACCESS | VIDEO SURVEILLANCE\nThe organization employs video surveillance of [Assignment: organization-defined operational areas] and retains video recordings for [Assignment: organization-defined time period].',
	},
	'PE-6 (4)': {
		family: 'PE',
		name: 'Monitoring Physical Access',
		description:
			'MONITORING PHYSICAL ACCESS | MONITORING PHYSICAL ACCESS TO INFORMATION SYSTEMS\nThe organization monitors physical access to the information system in addition to the physical access monitoring of the facility as [Assignment: organization-defined physical spaces containing one or more components of the information system].',
	},
	'PE-7': {
		family: 'PE',
		name: 'Visitor Control',
		description: '',
	},
	'PE-8': {
		family: 'PE',
		name: 'Access Records',
		description:
			'(A) The organization maintains visitor access records to the facility where the information system resides for [Assignment: organization-defined time period]; and\n(B) The organization reviews visitor access records [Assignment: organization-defined frequency].',
	},
	'PE-8 (1)': {
		family: 'PE',
		name: 'Access Records',
		description:
			'VISITOR ACCESS RECORDS | AUTOMATED RECORDS MAINTENANCE / REVIEW\nThe organization employs automated mechanisms to facilitate the maintenance and review of visitor access records.',
	},
	'PE-8 (2)': {
		family: 'PE',
		name: 'Access Records',
		description: 'VISITOR ACCESS RECORDS | PHYSICAL ACCESS RECORDS',
	},
	'PE-9': {
		family: 'PE',
		name: 'Power Equipment And Power Cabling',
		description:
			'(A) The organization protects power equipment and power cabling for the information system from damage and destruction.',
	},
	'PE-9 (1)': {
		family: 'PE',
		name: 'Power Equipment And Power Cabling',
		description:
			'POWER EQUIPMENT AND CABLING | REDUNDANT CABLING\nThe organization employs redundant power cabling paths that are physically separated by [Assignment: organization-defined distance].',
	},
	'PE-9 (2)': {
		family: 'PE',
		name: 'Power Equipment And Power Cabling',
		description:
			'POWER EQUIPMENT AND CABLING | AUTOMATIC VOLTAGE CONTROLS\nThe organization employs automatic voltage controls for [Assignment: organization-defined critical information system components].',
	},
	'PE-10': {
		family: 'PE',
		name: 'Emergency Shutoff',
		description:
			'(A) The organization provides the capability of shutting off power to the information system or individual system components in emergency situations.\n(B) The organization places emergency shutoff switches or devices in [Assignment: organization-defined location by information system or system component] to facilitate safe and easy access for personnel.\n(C) The organization protects emergency power shutoff capability from unauthorized activation.',
	},
	'PE-10 (1)': {
		family: 'PE',
		name: 'Emergency Shutoff',
		description: 'EMERGENCY SHUTOFF | ACCIDENTAL / UNAUTHORIZED ACTIVATION',
	},
	'PE-11': {
		family: 'PE',
		name: 'Emergency Power',
		description:
			'(A) The organization provides a short-term uninterruptible power supply to facilitate [Selection (one or more): an orderly shutdown of the information system; transition of the information system to long-term alternate power] in the event of a primary power source loss.',
	},
	'PE-11 (1)': {
		family: 'PE',
		name: 'Emergency Power',
		description:
			'EMERGENCY POWER | LONG-TERM ALTERNATE POWER SUPPLY - MINIMAL OPERATIONAL CAPABILITY\nThe organization provides a long-term alternate power supply for the information system that is capable of maintaining minimally required operational capability in the event of an extended loss of the primary power source.',
	},
	'PE-11 (2)': {
		family: 'PE',
		name: 'Emergency Power',
		description:
			'EMERGENCY POWER | LONG-TERM ALTERNATE POWER SUPPLY - SELF-CONTAINED\nThe organization provides a long-term alternate power supply for the information system that is:\n(a) Self-contained;\n(b) Not reliant on external power generation; and\n(c) Capable of maintaining [Selection: minimally required operational capability; full operational capability] in the event of an extended loss of the primary power source.',
	},
	'PE-12': {
		family: 'PE',
		name: 'Emergency Lighting',
		description:
			'(A) The organization employs and maintains automatic emergency lighting for the information system that activates in the event of a power outage or disruption and that covers emergency exits and evacuation routes within the facility.',
	},
	'PE-12 (1)': {
		family: 'PE',
		name: 'Emergency Lighting',
		description:
			'EMERGENCY LIGHTING | ESSENTIAL MISSIONS / BUSINESS FUNCTIONS\nThe organization provides emergency lighting for all areas within the facility supporting essential missions and business functions.',
	},
	'PE-13': {
		family: 'PE',
		name: 'Fire Protection',
		description:
			'(A) The organization employs and maintains fire suppression and detection devices/systems for the information system that are supported by an independent energy source.',
	},
	'PE-13 (1)': {
		family: 'PE',
		name: 'Fire Protection',
		description:
			'FIRE PROTECTION | DETECTION DEVICES / SYSTEMS\nThe organization employs fire detection devices/systems for the information system that activate automatically and notify [Assignment: organization-defined personnel or roles] and [Assignment: organization-defined emergency responders] in the event of a fire.',
	},
	'PE-13 (2)': {
		family: 'PE',
		name: 'Fire Protection',
		description:
			'FIRE PROTECTION | SUPPRESSION DEVICES / SYSTEMS\nThe organization employs fire suppression devices/systems for the information system that provide automatic notification of any activation to [Assignment: organization-defined personnel or roles] and [Assignment: organization-defined emergency responders].',
	},
	'PE-13 (3)': {
		family: 'PE',
		name: 'Fire Protection',
		description:
			'FIRE PROTECTION | AUTOMATIC FIRE SUPPRESSION\nThe organization employs an automatic fire suppression capability for the information system when the facility is not staffed on a continuous basis.',
	},
	'PE-13 (4)': {
		family: 'PE',
		name: 'Fire Protection',
		description:
			'FIRE PROTECTION | INSPECTIONS\nThe organization ensures that the facility undergoes [Assignment: organization-defined frequency] inspections by authorized and qualified inspectors and resolves identified deficiencies within [Assignment: organization-defined time period].',
	},
	'PE-14': {
		family: 'PE',
		name: 'Temperature And Humidity Controls',
		description:
			'(A) The organization maintains temperature and humidity levels within the facility where the information system resides at [Assignment: organization-defined acceptable levels].\n(B) The organization monitors temperature and humidity levels [Assignment: organization-defined frequency].',
	},
	'PE-14 (1)': {
		family: 'PE',
		name: 'Temperature And Humidity Controls',
		description:
			'TEMPERATURE AND HUMIDITY CONTROLS | AUTOMATIC CONTROLS\nThe organization employs automatic temperature and humidity controls in the facility to prevent fluctuations potentially harmful to the information system.',
	},
	'PE-14 (2)': {
		family: 'PE',
		name: 'Temperature And Humidity Controls',
		description:
			'TEMPERATURE AND HUMIDITY CONTROLS | MONITORING WITH ALARMS / NOTIFICATIONS\nThe organization employs temperature and humidity monitoring that provides an alarm or notification of changes potentially harmful to personnel or equipment.',
	},
	'PE-15': {
		family: 'PE',
		name: 'Water Damage Protection',
		description:
			'(A) The organization protects the information system from damage resulting from water leakage by providing master shutoff or isolation valves that are accessible, working properly, and known to key personnel.',
	},
	'PE-15 (1)': {
		family: 'PE',
		name: 'Water Damage Protection',
		description:
			'WATER DAMAGE PROTECTION | AUTOMATION SUPPORT\nThe organization employs automated mechanisms to detect the presence of water in the vicinity of the information system and alerts [Assignment: organization-defined personnel or roles].',
	},
	'PE-16': {
		family: 'PE',
		name: 'Delivery And Removal',
		description:
			'(A) The organization authorizes, monitors, and controls [Assignment: organization-defined types of information system components] entering and exiting the facility and maintains records of those items.',
	},
	'PE-17': {
		family: 'PE',
		name: 'Alternate Work Site',
		description:
			'(A) The organization employs [Assignment: organization-defined security controls] at alternate work sites.\n(B) The organization assesses as feasible, the effectiveness of security controls at alternate work sites.\n(C) The organization provides a means for employees to communicate with information security personnel in case of security incidents or problems.',
	},
	'PE-18': {
		family: 'PE',
		name: 'Location Of Information System Components',
		description:
			'(A) The organization positions information system components within the facility to minimize potential damage from [Assignment: organization-defined physical and environmental hazards] and to minimize the opportunity for unauthorized access.',
	},
	'PE-18 (1)': {
		family: 'PE',
		name: 'Location Of Information System Components',
		description:
			'LOCATION OF INFORMATION SYSTEM COMPONENTS | FACILITY SITE\nThe organization plans the location or site of the facility where the information system resides with regard to physical and environmental hazards and for existing facilities, considers the physical and environmental hazards in its risk mitigation strategy.',
	},
	'PE-19': {
		family: 'PE',
		name: 'Information Leakage',
		description:
			'(A) The organization protects the information system from information leakage due to electromagnetic signals emanations.',
	},
	'PE-19 (1)': {
		family: 'PE',
		name: 'Information Leakage',
		description:
			'INFORMATION LEAKAGE | NATIONAL EMISSIONS / TEMPEST POLICIES AND PROCEDURES\nThe organization ensures that information system components, associated data communications, and networks are protected in accordance with national emissions and TEMPEST policies and procedures based on the security category or classification of the information.',
	},
	'PE-20': {
		family: 'PE',
		name: 'Asset Monitoring And Tracking',
		description:
			'(A) The organization employs [Assignment: organization-defined asset location technologies] to track and monitor the location and movement of [Assignment: organization-defined assets] within [Assignment: organization-defined controlled areas].\n(B) The organization ensures that asset location technologies are employed in accordance with applicable GC legislation and TBS policies, directives, and standards.',
	},
	'PL-1': {
		family: 'PL',
		name: 'Security Planning Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A security planning policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the security planning policy and associated security planning controls.\n(B) The organization reviews and updates the current:\n(a) Security planning policy [Assignment: organization-defined frequency]; and\n(b) Security planning procedures [Assignment: organization-defined frequency].',
	},
	'PL-2': {
		family: 'PL',
		name: 'System Security Plan',
		description:
			'(A) The organization develops a security plan for the information system that:\n(a) Is consistent with the organization’s enterprise architecture;\n(b) Explicitly defines the authorization boundary for the system;\n(c) Describes the operational context of the information system in terms of missions and business processes;\n(d) Provides the security categorization of the information system including supporting rationale;\n(e) Describes the operational environment for the information system and relationships with or connections to other information systems;\n(f) Provides an overview of the security requirements for the system;\n(g) Identifies any relevant overlays, if applicable;\n(h) Describes the security controls in place or planned for meeting those requirements including a rationale for tailoring decisions; and\n(i) Is reviewed and approved by the authorizing official or designated representative prior to plan implementation.\n(B) The organization distributes copies of the security plan and communicates subsequent changes to the plan to [Assignment: organization-defined personnel or roles].\n(C) The organization reviews the security plan for the information system [Assignment: organization-defined frequency].\n(D) The organization updates the plan to address changes to the information system/environment of operation or problems identified during plan implementation or security control assessments.\n(E) The organization protects the security plan from unauthorized disclosure and modification.',
	},
	'PL-2 (1)': {
		family: 'PL',
		name: 'System Security Plan',
		description: 'SYSTEM SECURITY PLAN | CONCEPT OF OPERATIONS',
	},
	'PL-2 (2)': {
		family: 'PL',
		name: 'System Security Plan',
		description: 'SYSTEM SECURITY PLAN | FUNCTIONAL ARCHITECTURE',
	},
	'PL-2 (3)': {
		family: 'PL',
		name: 'System Security Plan',
		description:
			'SYSTEM SECURITY PLAN | PLAN / COORDINATE WITH OTHER ORGANIZATIONAL ENTITIES\nThe organization plans and coordinates security-related activities affecting the information system with [Assignment: organization-defined individuals or groups] before conducting such activities in order to reduce the impact on other organizational entities.',
	},
	'PL-3': {
		family: 'PL',
		name: 'System Security Plan Update',
		description: '',
	},
	'PL-4': {
		family: 'PL',
		name: 'Rules Of Behaviour',
		description:
			'(A) The organization establishes and makes readily available to individuals requiring access to the information system the rules that describe their responsibilities and expected behaviour with regard to information and information system usage.\n(B) The organization receives a signed acknowledgment from such individuals, indicating that they have read, understood, and agreed to abide by the rules of behaviour, before authorizing access to information and the information system.\n(C) The organization reviews and updates the rules of behaviour [Assignment: organization-defined frequency].\n(D) The organization requires individuals who have signed a previous version of the rules of behaviour to read and resign when the rules of behaviour are revised/updated.',
	},
	'PL-4 (1)': {
		family: 'PL',
		name: 'Rules Of Behaviour',
		description:
			'RULES OF BEHAVIOUR | SOCIAL MEDIA AND NETWORKING RESTRICTIONS\nThe organization includes in the rules of behaviour, explicit restrictions on the use of social media/networking sites and posting organizational information on public websites.',
	},
	'PL-5': {
		family: 'PL',
		name: 'Privacy Impact Assessment',
		description: '',
	},
	'PL-6': {
		family: 'PL',
		name: 'Security-Related Activity Planning',
		description: '',
	},
	'PL-7': {
		family: 'PL',
		name: 'Security Concepts Of Operation',
		description:
			'(A) The organization develops a security Concept of Operations (CONOPS) for the information system containing at a minimum, how the organization intends to operate the system from the perspective of information security.\n(B) The organization Reviews and updates the CONOPS [Assignment: organization-defined frequency].',
	},
	'PL-8': {
		family: 'PL',
		name: 'Information Security Architecture',
		description:
			'(A) The organization develops an information security architecture for the information system that:\n(a) Describes the overall philosophy, requirements, and approach to be taken with regard to protecting the confidentiality, integrity, and availability of organizational information;\n(b) Describes how the information security architecture is integrated into and supports the enterprise architecture; and\n(c) Describes any information security assumptions about and dependencies on, external services.\n(B) The organization reviews and updates the information security architecture [Assignment: organization-defined frequency] to reflect updates in the enterprise architecture.\n(C) The organization ensures that planned information security architecture changes are reflected in the security plan, the security Concept of Operations (CONOPS), and organizational procurements/acquisitions.',
	},
	'PL-8 (1)': {
		family: 'PL',
		name: 'Information Security Architecture',
		description:
			'INFORMATION SECURITY ARCHITECTURE | DEFENCE-IN-DEPTH\n(a) The organization designs its security architecture using a defence-in-depth approach that allocates [Assignment: organization-defined security safeguards] to [Assignment: organization-defined locations and architectural layers]; and\n(b) The organization designs its security architecture using a defence-in-depth approach that ensures that the allocated security safeguards operate in a coordinated and mutually reinforcing manner.',
	},
	'PL-8 (2)': {
		family: 'PL',
		name: 'Information Security Architecture',
		description:
			'INFORMATION SECURITY ARCHITECTURE | SUPPLIER DIVERSITY\nThe organization requires that [Assignment: organization-defined security safeguards] allocated to [Assignment: organization-defined locations and architectural layers] are obtained from different suppliers.',
	},
	'PL-9': {
		family: 'PL',
		name: 'Central Management',
		description:
			'(A) The organization centrally manages [Assignment: organization-defined security controls and related processes].',
	},
	'PS-1': {
		family: 'PS',
		name: 'Personnel Security Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A personnel security policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the personnel security policy and associated personnel security controls.\n(B) The organization reviews and updates the current:\n(a) Personnel security policy [Assignment: organization-defined frequency]; and\n(b) Personnel security procedures [Assignment: organization-defined frequency].',
	},
	'PS-2': {
		family: 'PS',
		name: 'Position Categorization',
		description:
			'(A) The organization categorizes all positions based on the injury the individuals could cause by malicious acts resulting from the privileges associated with the position.\n(B) The organization selects the appropriate screening level (e.g. Enhanced Reliability Check (ERC), I, II, III) for individuals filling those positions.\n(C) The organization reviews and revises categorizations [Assignment: organization-defined frequency].',
	},
	'PS-3': {
		family: 'PS',
		name: 'Personnel Screening',
		description:
			'(A) The organization screens individuals prior to authorizing access to the information system in accordance with the TBS Standard on Security Screening [Reference 9].\n(B) The organization rescreens individuals according to [Assignment: organization-defined conditions requiring rescreening and, where rescreening is so indicated, the frequency of such rescreening].',
	},
	'PS-3 (1)': {
		family: 'PS',
		name: 'Personnel Screening',
		description:
			'PERSONNEL SCREENING | CLASSIFIED INFORMATION\nThe organization ensures that individuals accessing an information system processing, storing, or transmitting classified information are cleared and indoctrinated to the highest classification level of the information to which they have access on the system.',
	},
	'PS-3 (2)': {
		family: 'PS',
		name: 'Personnel Screening',
		description:
			'PERSONNEL SCREENING | FORMAL INDOCTRINATION\nThe organization ensures that individuals accessing an information system processing, storing, or transmitting types of classified information which require formal indoctrination, are formally indoctrinated for all of the relevant types of information to which they have access on the system.',
	},
	'PS-3 (3)': {
		family: 'PS',
		name: 'Personnel Screening',
		description:
			'PERSONNEL SCREENING | INFORMATION WITH SPECIAL PROTECTION MEASURES\nThe organization ensures that individuals accessing an information system processing, storing, or transmitting information requiring special protection:\n(a) Have valid access authorizations that are demonstrated by assigned official government duties; and\n(b) Satisfy [Assignment: organization-defined additional personnel screening criteria].',
	},
	'PS-4': {
		family: 'PS',
		name: 'Personnel Termination',
		description:
			'(A) The organization, upon termination of individual employment disables information system access within [Assignment: organization-defined time period].\n(B) The organization, upon termination of individual employment terminates/revokes any authenticators/credentials associated with the individual.\n(C) The organization, upon termination of individual employment conducts exit interviews that include a discussion of [Assignment: organization-defined information security topics].\n(D) The organization, upon termination of individual employment retrieves all security-related organizational information system-related property.\n(E) The organization, upon termination of individual employment retains access to organizational information and information systems formerly controlled by terminated individual.\n(F) The organization, upon termination of individual employment notifies [Assignment: organization-defined personnel or roles] within [Assignment: organization-defined time period].',
	},
	'PS-4 (1)': {
		family: 'PS',
		name: 'Personnel Termination',
		description:
			'PERSONNEL TERMINATION | POST-EMPLOYMENT REQUIREMENTS\n(a) The organization notifies terminated individuals of applicable, legally binding post-employment requirements for the protection of organizational information; and\n(b) The organization requires terminated individuals to sign an acknowledgment of post-employment requirements as part of the organizational termination process.',
	},
	'PS-4 (2)': {
		family: 'PS',
		name: 'Personnel Termination',
		description:
			'PERSONNEL TERMINATION | AUTOMATED NOTIFICATION\nThe organization employs automated mechanisms to notify [Assignment: organization-defined personnel or roles] upon termination of an individual.',
	},
	'PS-5': {
		family: 'PS',
		name: 'Personnel Transfer',
		description:
			'(A) The organization reviews and confirms ongoing operational need for current logical and physical access authorizations to information systems/facilities when individuals are reassigned or transferred to other positions within the organization.\n(B) The organization initiates [Assignment: organization-defined transfer or reassignment actions] within [Assignment: organization-defined time period following the TBS Standard on Security Screening [Reference 9]].\n(C) The organization modifies access authorization as needed to correspond with any changes in operational need due to reassignment or transfer.\n(D) The organization notifies [Assignment: organization-defined personnel or roles] within [Assignment: organization-defined time period].',
	},
	'PS-6': {
		family: 'PS',
		name: 'Access Agreements',
		description:
			'(A) The organization develops and documents access agreements for organizational information systems.\n(B) The organization reviews and updates the access agreements [Assignment: organization-defined frequency].\n(C) The organization ensures that individuals requiring access to organizational information and information systems: \n(a) Sign appropriate access agreements prior to being granted access; and\n(b) Re-sign access agreements to maintain access to organizational information systems when access agreements have been updated or [Assignment: organization-defined frequency].',
	},
	'PS-6 (1)': {
		family: 'PS',
		name: 'Access Agreements',
		description: 'ACCESS AGREEMENTS | INFORMATION REQUIRING SPECIAL PROTECTION',
	},
	'PS-6 (2)': {
		family: 'PS',
		name: 'Access Agreements',
		description:
			'ACCESS AGREEMENTS | CLASSIFIED INFORMATION REQUIRING SPECIAL PROTECTION\nThe organization ensures that access to Classified information requiring special protection is granted only to individuals who:\n(a) Have a valid access authorization that is demonstrated by assigned official government duties;\n(b) Satisfy associated personnel security criteria; and\n(c) Have read, understood, and signed a nondisclosure agreement.',
	},
	'PS-6 (3)': {
		family: 'PS',
		name: 'Access Agreements',
		description:
			'ACCESS AGREEMENTS | POST-EMPLOYMENT REQUIREMENTS\n(a) The organization notifies individuals of applicable, legally binding post-employment requirements for protection of organizational information; and\n(b) The organization requires individuals to sign an acknowledgment of these requirements, if applicable, as part of granting initial access to covered information.',
	},
	'PS-7': {
		family: 'PS',
		name: 'Third-Party Personnel Security',
		description:
			'(A) The organization establishes personnel security control requirements including security roles and responsibilities for third-party providers.\n(B) The organization requires third-party providers to comply with personnel security control policies and procedures established by the organization.\n(C) The organization documents personnel security requirements.\n(D) The organization requires third-party providers to notify [Assignment: organization-defined personnel or roles] of any personnel transfers or terminations of third-party personnel who possess organizational credentials and/or badges, or who have information system privileges within [Assignment: organization-defined time period].\n(E) The organization monitors provider compliance.\n(AA) The organization ensures security screening of private sector organizations and individuals who have access to Protected and Classified information and assets, in accordance with the TBS Standard on Security Screening [Reference 9].\n(BB) The organization explicitly defines government oversight and end-user roles and responsibilities relative to third-party provided services in accordance with the TBS Security and Contracting Management Standard [Reference 25].',
	},
	'PS-8': {
		family: 'PS',
		name: 'Personnel Sanctions',
		description:
			'(A) The organization employs a formal sanctions process for individuals failing to comply with established information security policies and procedures.\n(B) The organization notifies [Assignment: organization-defined personnel or roles] within [Assignment: organization-defined time period] when a formal employee sanctions process is initiated, identifying the individual sanctioned and the reason for the sanction.',
	},
	'RA-1': {
		family: 'RA',
		name: 'Risk Assessment Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A risk assessment policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the risk assessment policy and associated risk assessment controls.\n(B) The organization reviews and updates the current:\n(a) Risk assessment policy [Assignment: organization-defined frequency]; and\n(b) Risk assessment procedures [Assignment: organization-defined frequency].',
	},
	'RA-2': {
		family: 'RA',
		name: 'Security Categorization',
		description:
			'(A) The organization categorizes information and the information system in accordance with applicable GC legislation and TBS .\n(B) The organization documents the security categorization results (including supporting rationale) in the security plan for the information system.\n(C) The organization ensures that the security categorization decision is reviewed and approved by the authorizing official or authorizing official’s designated representative.',
	},
	'RA-3': {
		family: 'RA',
		name: 'Risk Assessment',
		description:
			'(A) The organization conducts an assessment of risk, including the likelihood and magnitude of harm, from the unauthorized access, use, disclosure, disruption, modification, or destruction of the information system and the information it processes, stores, or transmits.\n(B) The organization documents risk assessment results in [Selection: security plan; risk assessment report; [Assignment: organization-defined document]].\n(C) The organization reviews risk assessment results [Assignment: organization-defined frequency].\n(D) The organization disseminates risk assessment results to [Assignment: organization-defined personnel or roles].\n(E) The organization updates the risk assessment [Assignment: organization-defined frequency] or whenever there are significant changes to the information system or environment of operation (including the identification of new threats and vulnerabilities), or other conditions that may impact the security state of the system.',
	},
	'RA-4': {
		family: 'RA',
		name: 'Risk Assessment Update',
		description: '',
	},
	'RA-5': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description:
			'(A) The organization scans for vulnerabilities in the information system and hosted applications [Assignment: organization-defined frequency and/or randomly in accordance with organization-defined process] and when new vulnerabilities potentially affecting the system/applications are identified and reported.\n(B) The organization employs vulnerability scanning tools and techniques that facilitate interoperability among tools and automate parts of the vulnerability management process by using standards for:\n(a) Enumerating platforms, software flaws, and improper configurations;\n(b) Formatting checklists and test procedures; and\n(c) Measuring vulnerability impact.\n(C) The organization analyzes vulnerability scan reports and results from security control assessments.\n(D) The organization remediates legitimate vulnerabilities [Assignment: organization-defined response times] in accordance with an organizational assessment of risk.\n(E) The organization shares information obtained from the vulnerability scanning process and security control assessments with [Assignment: organization-defined personnel or roles] to help eliminate similar vulnerabilities in other information systems (i.e., systemic weaknesses or deficiencies).',
	},
	'RA-5 (1)': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description:
			'VULNERABILITY SCANNING | UPDATE TOOL CAPABILITY\nThe organization employs vulnerability scanning tools that include the capability to readily update the information system vulnerabilities to be scanned.',
	},
	'RA-5 (2)': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description:
			'VULNERABILITY SCANNING | UPDATE BY FREQUENCY / PRIOR TO NEW SCAN / WHEN IDENTIFIED\nThe organization updates the information system vulnerabilities scanned [Selection (one or more): [Assignment: organization-defined frequency]; prior to a new scan; when new vulnerabilities are identified and reported].',
	},
	'RA-5 (3)': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description:
			'VULNERABILITY SCANNING | BREADTH / DEPTH OF COVERAGE\nThe organization employs vulnerability scanning procedures that can identify the breadth and depth of coverage (i.e., information system components scanned and vulnerabilities checked).',
	},
	'RA-5 (4)': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description:
			'VULNERABILITY SCANNING | DISCOVERABLE INFORMATION\nThe organization determines what information about the information system is discoverable by adversaries and subsequently takes [Assignment: organization-defined corrective actions].',
	},
	'RA-5 (5)': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description:
			'VULNERABILITY SCANNING | PRIVILEGED ACCESS\nThe information system implements privileged access authorization to [Assignment: organization-identified information system components] for selected [Assignment: organization-defined vulnerability scanning activities].',
	},
	'RA-5 (6)': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description:
			'VULNERABILITY SCANNING | AUTOMATED TREND ANALYSES\nThe organization employs automated mechanisms to compare the results of vulnerability scans over time to determine trends in information system vulnerabilities.',
	},
	'RA-5 (7)': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description:
			'VULNERABILITY SCANNING | AUTOMATED DETECTION AND NOTIFICATION OF UNAUTHORIZED COMPONENTS',
	},
	'RA-5 (8)': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description:
			'VULNERABILITY SCANNING | REVIEW HISTORIC AUDIT LOGS\nThe organization reviews historic audit logs to determine if a vulnerability identified in the information system has been previously exploited.',
	},
	'RA-5 (9)': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description: 'VULNERABILITY SCANNING | PENETRATION TESTING AND ANALYSES',
	},
	'RA-5 (10)': {
		family: 'RA',
		name: 'Vulnerability Scanning',
		description:
			'VULNERABILITY SCANNING | CORRELATE SCANNING INFORMATION\nThe organization correlates the output from vulnerability scanning tools to determine the presence of multi-vulnerability/multi-hop attack vectors.',
	},
	'RA-6': {
		family: 'RA',
		name: 'Technical Surveillance Countermeasures Survey',
		description:
			'(A) The organization employs a technical surveillance countermeasures survey at [Assignment: organization-defined locations] [Selection (one or more): [Assignment: organization-defined frequency]; [Assignment: organization-defined events or indicators occur]].',
	},
	'SA-1': {
		family: 'SA',
		name: 'System And Services Acquisition Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A system and services acquisition policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the system and services acquisition policy and associated system and services acquisition controls.\n(B) The organization reviews and updates the current:\n(a) System and services acquisition policy [Assignment: organization-defined frequency]; and\n(b)  System and services acquisition procedures [Assignment: organization-defined frequency].',
	},
	'SA-2': {
		family: 'SA',
		name: 'Allocation Of Resources',
		description:
			'(A) The organization determines information security control requirements for the information system or information system service in mission/business process planning.\n(B) The organization determines, documents, and allocates the resources required to protect the information system or information system service as part of its capital planning and investment control process.\n(C) The organization establishes a discrete line item for information security in organizational programming and budgeting documentation.\nTBS Operational Security Standard - Management of Information Technology Security [Reference 7].',
	},
	'SA-3': {
		family: 'SA',
		name: 'System Development Lifecycle',
		description:
			'(A) The organization manages the information system using [Assignment: organization-defined system development life cycle] that incorporates information security considerations.\n(B) The organization defines and documents information security roles and responsibilities throughout the system development life cycle.\n(C) The organization identifies individuals having information security roles and responsibilities.\n(D) The organization integrates the organizational information security risk management process into system development life cycle activities.',
	},
	'SA-4': {
		family: 'SA',
		name: 'Acquisition Process',
		description:
			'(A) The organization includes the following requirements, descriptions, and criteria, explicitly or by reference, in the acquisition contract for the information system, system component, or information system service in accordance with applicable GC legislation and TBS policies, directives and standards, and organizational mission/business needs:\n(a) Security functional requirements;\n(b) Security strength requirements;\n(c) Security assurance requirements;\n(d) Security-related documentation requirements;\n(e) Requirements for protecting security-related documentation;\n(f) Description of the information system development environment and environment in which the system is intended to operate; and\n(g) Acceptance criteria.\n(AA) The organization includes security-related documentation, requirements and/or specifications, explicitly or by reference, in information system acquisition contracts based on an assessment of risk and in accordance with the TBS Security and Contracting Management Standard [Reference 25].\n(BB) The organization includes the development and evaluation-related requirements and/or specifications, explicitly or by reference, in information system acquisition contracts based on an assessment of risk and in accordance with applicable GC legislation and TBS policies, directives and standards.',
	},
	'SA-4 (1)': {
		family: 'SA',
		name: 'Acquisition Process',
		description:
			'ACQUISITION PROCESS | FUNCTIONAL PROPERTIES OF SECURITY CONTROLS\nThe organization requires the developer of the information system, system component, or information system service to provide a description of the functional properties of the security controls to be employed.',
	},
	'SA-4 (2)': {
		family: 'SA',
		name: 'Acquisition Process',
		description:
			'ACQUISITION PROCESS | DESIGN / IMPLEMENTATION INFORMATION FOR SECURITY CONTROLS\nThe organization requires the developer of the information system, system component, or information system service to provide design and implementation information for the security controls to be employed that includes: [Selection (one or more): security-relevant external system interfaces; high-level design; low-level design; source code or hardware schematics; [Assignment: organization-defined design/implementation information]] at [Assignment: organization-defined level of detail].',
	},
	'SA-4 (3)': {
		family: 'SA',
		name: 'Acquisition Process',
		description:
			'ACQUISITION PROCESS | DEVELOPMENT METHODS / TECHNIQUES / PRACTICES\nThe organization requires the developer of the information system, system component, or information system service to demonstrate the use of a system development life cycle that includes [Assignment: organization-defined state-of-the-practice system/security engineering methods, software development methods, testing/evaluation/validation techniques, and quality control processes].',
	},
	'SA-4 (4)': {
		family: 'SA',
		name: 'Acquisition Process',
		description: 'ACQUISITION PROCESS | ASSIGNMENT OF COMPONENTS TO SYSTEMS',
	},
	'SA-4 (5)': {
		family: 'SA',
		name: 'Acquisition Process',
		description:
			'ACQUISITION PROCESS | SYSTEM / COMPONENT / SERVICE CONFIGURATIONS\nThe organization requires the developer of the information system, system component, or information system service to:\n(a) Deliver the system, component, or service with [Assignment: organization-defined security configurations] implemented; and\n(b) Use the configurations as the default for any subsequent system, component, or service reinstallation or upgrade.',
	},
	'SA-4 (6)': {
		family: 'SA',
		name: 'Acquisition Process',
		description:
			'ACQUISITION PROCESS | USE OF INFORMATION ASSURANCE PRODUCTS\n(a) The organization employs only government off-the-shelf (GOTS) or commercial off-the-shelf (COTS) IT security and security-enabled information technology products that compose an CSE-approved solution to protect classified information when the networks used to transmit the information are at a lower classification level than the information being transmitted; and\n(b) The organization ensures that these products have been evaluated and/or validated by CSE or in accordance with CSE-approved procedures.',
	},
	'SA-4 (7)': {
		family: 'SA',
		name: 'Acquisition Process',
		description:
			'ACQUISITION PROCESS | NIAP-APPROVED PROTECTION PROFILES\n(a) The organization limits the use of commercially provided information assurance (IA) and IA-enabled information technology products to those products that have been successfully evaluated against a CSE-approved Protection Profile for a specific technology type, if such a profile exists; and\n(b) The organization requires, if no CSE-approved Protection Profile exists for a specific technology type but a commercially provided information technology product relies on cryptographic functionality to enforce its security policy, that the cryptographic module is FIPS-validated.',
	},
	'SA-4 (8)': {
		family: 'SA',
		name: 'Acquisition Process',
		description:
			'ACQUISITION PROCESS | CONTINUOUS MONITORING PLAN\nThe organization requires the developer of the information system, system component, or information system service to produce a plan for the continuous monitoring of security control effectiveness that contains [Assignment: organization-defined level of detail].',
	},
	'SA-4 (9)': {
		family: 'SA',
		name: 'Acquisition Process',
		description:
			'ACQUISITION PROCESS | FUNCTIONS / PORTS / PROTOCOLS / SERVICES IN USE\nThe organization requires the developer of the information system, system component, or information system service to identify early in the system development life cycle, the functions, ports, protocols, and services intended for organizational use.',
	},
	'SA-5': {
		family: 'SA',
		name: 'Information System Documentation',
		description:
			'(A) The organization obtains administrator documentation for the information system, system component, or information system service that describes:\n(a) Secure configuration, installation, and operation of the system, component, or service; \n(b) Effective use and maintenance of security functions/mechanisms; and\n(c) Known vulnerabilities regarding configuration and use of administrative (i.e., privileged) functions.\n(B) The organization obtains user documentation for the information system, system component, or information system service that describes:\n(a) User-accessible security functions/mechanisms and how to effectively use those security functions/mechanisms;\n(b) Methods for user interaction, which enables individuals to use the system, component, or service in a more secure manner; and\n(c) User responsibilities in maintaining the security of the system, component, or service.\n(C) The organization documents attempts to obtain information system, system component, or information system service documentation when such documentation is either unavailable or nonexistent and [Assignment: organization-defined actions] in response.\n(D) The organization protects documentation as required, in accordance with the risk management strategy.\n(E) The organization distributes documentation to [Assignment: organization-defined personnel or roles].',
	},
	'SA-5 (1)': {
		family: 'SA',
		name: 'Information System Documentation',
		description:
			'INFORMATION SYSTEM DOCUMENTATION | FUNCTIONAL PROPERTIES OF SECURITY CONTROLS',
	},
	'SA-5 (2)': {
		family: 'SA',
		name: 'Information System Documentation',
		description:
			'INFORMATION SYSTEM DOCUMENTATION | SECURITY-RELEVANT EXTERNAL SYSTEM INTERFACES',
	},
	'SA-5 (3)': {
		family: 'SA',
		name: 'Information System Documentation',
		description: 'INFORMATION SYSTEM DOCUMENTATION | HIGH-LEVEL DESIGN',
	},
	'SA-5 (4)': {
		family: 'SA',
		name: 'Information System Documentation',
		description: 'INFORMATION SYSTEM DOCUMENTATION | LOW-LEVEL DESIGN',
	},
	'SA-5 (5)': {
		family: 'SA',
		name: 'Information System Documentation',
		description: 'INFORMATION SYSTEM DOCUMENTATION | SOURCE CODE',
	},
	'SA-6': {
		family: 'SA',
		name: 'Software Usage Restrictions',
		description: '',
	},
	'SA-7': {
		family: 'SA',
		name: 'User-Installed Software',
		description: '',
	},
	'SA-8': {
		family: 'SA',
		name: 'Security Engineering Principles',
		description:
			'(A) The organization applies information system security engineering principles in the specification, design, development, implementation, and modification of the information system.',
	},
	'SA-8 (100)': {
		family: 'SA',
		name: 'Security Engineering Principles',
		description:
			'The organization employs licensed and certified security engineers that assume responsibility for the specification, design, development and implementation of information system security solutions.',
	},
	'SA-9': {
		family: 'SA',
		name: 'External Information System Services',
		description:
			'(A) The organization requires that providers of external information system services comply with organizational information security control requirements and employ [Assignment: organization-defined security controls] in accordance with the TBS Security and Contracting Management Standard [Reference 25].\n(B) The organization defines and documents government oversight and user roles and responsibilities with regard to external information system services.\n(C) The organization employs [Assignment: organization-defined processes, methods, and techniques] to monitor security control compliance by external service providers on an ongoing basis.',
	},
	'SA-9 (1)': {
		family: 'SA',
		name: 'External Information System Services',
		description:
			'EXTERNAL INFORMATION SYSTEMS | RISK ASSESSMENTS / ORGANIZATIONAL APPROVALS\n(a) The organization conducts an organizational assessment of risk prior to the acquisition or outsourcing of dedicated information security services; and\n(b) The organization ensures that the acquisition or outsourcing of dedicated information security services is approved by [Assignment: organization-defined personnel or roles].',
	},
	'SA-9 (2)': {
		family: 'SA',
		name: 'External Information System Services',
		description:
			'EXTERNAL INFORMATION SYSTEMS | IDENTIFICATION OF FUNCTIONS / PORTS / PROTOCOLS / SERVICES\nThe organization requires providers of [Assignment: organization-defined external information system services] to identify the functions, ports, protocols, and other services required for the use of such services.',
	},
	'SA-9 (3)': {
		family: 'SA',
		name: 'External Information System Services',
		description:
			'EXTERNAL INFORMATION SYSTEMS | ESTABLISH / MAINTAIN TRUST RELATIONSHIP WITH PROVIDERS\nThe organization establishes, documents, and maintains trust relationships with external service providers based on [Assignment: organization-defined security requirements, properties, factors, or conditions defining acceptable trust relationships].',
	},
	'SA-9 (4)': {
		family: 'SA',
		name: 'External Information System Services',
		description:
			'EXTERNAL INFORMATION SYSTEMS | CONSISTENT INTERESTS OF CONSUMERS AND PROVIDERS\nThe organization employs [Assignment: organization-defined security safeguards] to ensure that the interests of [Assignment: organization-defined external service providers] are consistent with and reflect organizational interests.',
	},
	'SA-9 (5)': {
		family: 'SA',
		name: 'External Information System Services',
		description:
			'EXTERNAL INFORMATION SYSTEMS | PROCESSING, STORAGE, AND SERVICE LOCATION\nThe organization restricts the location of [Selection (one or more): information processing; information/data; information system services] to [Assignment: organization-defined locations] based on [Assignment: organization-defined requirements or conditions].',
	},
	'SA-10': {
		family: 'SA',
		name: 'Developer Configuration Management',
		description:
			'(A) The organization requires the developer of the information system, system component, or information system service to perform configuration management during system, component, or service [Selection (one or more): design; development; implementation; operation];\n(B) The organization requires the developer of the information system, system component, or information system service to document, manage, and control the integrity of changes to [Assignment: organization-defined configuration items under configuration management];\n(C) The organization requires the developer of the information system, system component, or information system service to implement only organization-approved changes to the system, component, or service;\n(D) The organization requires the developer of the information system, system component, or information system service to document approved changes to the system, component, or service and the potential security impacts of such changes; and\n(E) The organization requires the developer of the information system, system component, or information system service to track security flaws and flaw resolution within the system, component, or service and report findings to [Assignment: organization-defined personnel].',
	},
	'SA-10 (1)': {
		family: 'SA',
		name: 'Developer Configuration Management',
		description:
			'DEVELOPER CONFIGURATION MANAGEMENT | SOFTWARE / FIRMWARE INTEGRITY VERIFICATION\nThe organization requires the developer of the information system, system component, or information system service to enable integrity verification of software and firmware components.',
	},
	'SA-10 (2)': {
		family: 'SA',
		name: 'Developer Configuration Management',
		description:
			'DEVELOPER CONFIGURATION MANAGEMENT | ALTERNATIVE CONFIGURATION MANAGEMENT PROCESSES\nThe organization provides an alternate configuration management process using organizational personnel in the absence of a dedicated developer configuration management team.',
	},
	'SA-10 (3)': {
		family: 'SA',
		name: 'Developer Configuration Management',
		description:
			'DEVELOPER CONFIGURATION MANAGEMENT | HARDWARE INTEGRITY VERIFICATION\nThe organization requires the developer of the information system, system component, or information system service to enable integrity verification of hardware components.',
	},
	'SA-10 (4)': {
		family: 'SA',
		name: 'Developer Configuration Management',
		description:
			'DEVELOPER CONFIGURATION MANAGEMENT | TRUSTED GENERATION\nThe organization requires the developer of the information system, system component, or information system service to employ tools for comparing newly generated versions of security-relevant hardware descriptions and software/firmware source and object code with previous versions.',
	},
	'SA-10 (5)': {
		family: 'SA',
		name: 'Developer Configuration Management',
		description:
			'DEVELOPER CONFIGURATION MANAGEMENT | MAPPING INTEGRITY FOR VERSION CONTROL\nThe organization requires the developer of the information system, system component, or information system service to maintain the integrity of the mapping between the master build data (hardware drawings and software/firmware code) describing the current version of security-relevant hardware, software, and firmware and the on-site master copy of the data for the current version.',
	},
	'SA-10 (6)': {
		family: 'SA',
		name: 'Developer Configuration Management',
		description:
			'DEVELOPER CONFIGURATION MANAGEMENT | TRUSTED DISTRIBUTION\nThe organization requires the developer of the information system, system component, or information system service to execute procedures for ensuring that security-relevant hardware, software, and firmware updates distributed to the organization are exactly as specified by the master copies.',
	},
	'SA-11': {
		family: 'SA',
		name: 'Developer Security Testing',
		description:
			'(A) The organization requires the developer of the information system, system component, or information system service to create and implement a security assessment plan.\n(B) The organization requires the developer of the information system, system component, or information system service to perform [Selection (one or more): unit; integration; system; regression] testing/evaluation at [Assignment: organization-defined depth and coverage].\n(C) The organization requires the developer of the information system, system component, or information system service to produce evidence of the execution of the security assessment plan and the results of the security testing/evaluation.\n(D) The organization requires the developer of the information system, system component, or information system service to implement a verifiable flaw remediation process.\n(E) The organization requires the developer of the information system, system component, or information system service to correct flaws identified during security testing/evaluation.',
	},
	'SA-11 (1)': {
		family: 'SA',
		name: 'Developer Security Testing',
		description:
			'DEVELOPER SECURITY TESTING AND EVALUATION | STATIC CODE ANALYSIS\nThe organization requires the developer of the information system, system component, or information system service to employ static code analysis tools to identify common flaws and document the results of the analysis.',
	},
	'SA-11 (2)': {
		family: 'SA',
		name: 'Developer Security Testing',
		description:
			'DEVELOPER SECURITY TESTING AND EVALUATION | THREAT AND VULNERABILITY ANALYSES\nThe organization requires the developer of the information system, system component, or information system service to perform threat and vulnerability analyses and subsequent testing/evaluation of the as-built system, component, or service.',
	},
	'SA-11 (3)': {
		family: 'SA',
		name: 'Developer Security Testing',
		description:
			'DEVELOPER SECURITY TESTING AND EVALUATION | INDEPENDENT VERIFICATION OF ASSESSMENT PLANS / EVIDENCE\n(a) The organization requires an independent agent satisfying [Assignment: organization-defined independence criteria] to verify the correct implementation of the developer security assessment plan and the evidence produced during security testing/evaluation; and\n(b) The organization ensures that the independent agent either is provided with sufficient information to complete the verification process or has been granted the authority to obtain such information.',
	},
	'SA-11 (4)': {
		family: 'SA',
		name: 'Developer Security Testing',
		description:
			'DEVELOPER SECURITY TESTING AND EVALUATION | MANUAL CODE REVIEWS\nThe organization requires the developer of the information system, system component, or information system service to perform a manual code review of [Assignment: organization-defined specific code] using [Assignment: organization-defined processes, procedures, and/or techniques].',
	},
	'SA-11 (5)': {
		family: 'SA',
		name: 'Developer Security Testing',
		description:
			'DEVELOPER SECURITY TESTING AND EVALUATION | PENETRATION TESTING / ANALYSIS\nThe organization requires the developer of the information system, system component, or information system service to perform penetration testing at [Assignment: organization-defined breadth/depth] and with [Assignment: organization-defined constraints].',
	},
	'SA-11 (6)': {
		family: 'SA',
		name: 'Developer Security Testing',
		description:
			'DEVELOPER SECURITY TESTING AND EVALUATION | ATTACK SURFACE REVIEWS\nThe organization requires the developer of the information system, system component, or information system service to perform attack surface reviews.',
	},
	'SA-11 (7)': {
		family: 'SA',
		name: 'Developer Security Testing',
		description:
			'DEVELOPER SECURITY TESTING AND EVALUATION | VERIFY SCOPE OF TESTING / EVALUATION\nThe organization requires the developer of the information system, system component, or information system service to verify that the scope of security testing/evaluation provides complete coverage of required security controls at [Assignment: organization-defined depth of testing/evaluation].',
	},
	'SA-11 (8)': {
		family: 'SA',
		name: 'Developer Security Testing',
		description:
			'DEVELOPER SECURITY TESTING AND EVALUATION | DYNAMIC CODE ANALYSIS\nThe organization requires the developer of the information system, system component, or information system service to employ dynamic code analysis tools to identify common flaws and document the results of the analysis.',
	},
	'SA-12': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'(A) The organization protects against supply chain threats to the information system, system component, or information system service by employing [Assignment: organization-defined security safeguards] as part of a comprehensive, defence-in-breadth information security strategy.',
	},
	'SA-12 (1)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | ACQUISITION STRATEGIES / TOOLS / METHODS\nThe organization employs [Assignment: organization-defined tailored acquisition strategies, contract tools, and procurement methods] for the purchase of the information system, system component, or information system service from suppliers.',
	},
	'SA-12 (2)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | SUPPLIER REVIEWS\nThe organization conducts a supplier review prior to entering into a contractual agreement to acquire the information system, system component, or information system service.',
	},
	'SA-12 (3)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description: 'SUPPLY CHAIN PROTECTION | TRUSTED SHIPPING AND WAREHOUSING',
	},
	'SA-12 (4)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description: 'SUPPLY CHAIN PROTECTION | DIVERSITY OF SUPPLIERS',
	},
	'SA-12 (5)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | LIMITATION OF HARM\nThe organization employs [Assignment: organization-defined security safeguards] to limit harm from potential adversaries identifying and targeting the organizational supply chain.',
	},
	'SA-12 (6)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description: 'SUPPLY CHAIN PROTECTION | MINIMIZING PROCUREMENT TIME',
	},
	'SA-12 (7)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | ASSESSMENTS PRIOR TO SELECTION / ACCEPTANCE / UPDATE\nThe organization conducts an assessment of the information system, system component, or information system service prior to selection, acceptance, or update.',
	},
	'SA-12 (8)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | USE OF ALL-SOURCE INTELLIGENCE\nThe organization uses all-source intelligence analysis of suppliers and potential suppliers of the information system, system component, or information system service.',
	},
	'SA-12 (9)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | OPERATIONS SECURITY\nThe organization employs [Assignment: organization-defined Operations Security (OPSEC) safeguards] in accordance with classification guides to protect supply chain-related information for the information system, system component, or information system service.',
	},
	'SA-12 (10)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | VALIDATE AS GENUINE AND NOT ALTERED\nThe organization employs [Assignment: organization-defined security safeguards] to validate that the information system or system component received is genuine and has not been altered.',
	},
	'SA-12 (11)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | PENETRATION TESTING / ANALYSIS OF ELEMENTS, PROCESSES, AND ACTORS\nThe organization employs [Selection (one or more): organizational analysis, independent third-party analysis, organizational penetration testing, independent third-party penetration testing] of [Assignment: organization-defined supply chain elements, processes, and actors] associated with the information system, system component, or information system service.',
	},
	'SA-12 (12)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | INTER-ORGANIZATIONAL AGREEMENTS\nThe organization establishes inter-organizational agreements and procedures with entities involved in the supply chain for the information system, system component, or information system service.',
	},
	'SA-12 (13)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | CRITICAL INFORMATION SYSTEM COMPONENTS\nThe organization employs [Assignment: organization-defined security safeguards] to ensure an adequate supply of [Assignment: organization-defined critical information system components].',
	},
	'SA-12 (14)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | IDENTITY AND TRACEABILITY\nThe organization establishes and retains unique identification of [Assignment: organization-defined supply chain elements, processes, and actors] for the information system, system component, or information system service.',
	},
	'SA-12 (15)': {
		family: 'SA',
		name: 'Supply Chain Protection',
		description:
			'SUPPLY CHAIN PROTECTION | PROCESSES TO ADDRESS WEAKNESSES OR DEFICIENCIES\nThe organization establishes a process to address weaknesses or deficiencies in supply chain elements identified during independent or organizational assessments of such elements.',
	},
	'SA-13': {
		family: 'SA',
		name: 'Trustworthiness',
		description:
			'[Not allocated in GC profiles. However, CSE’s definition of Robustness is synonymous with NIST’s definition of Trustworthiness. Section 7 of CSE ITSG-33 Annex 2 Information System Security Risk Management Activities [Reference 58] covers the topic of Robustness as integrated in the ISSIP.] \n\n',
	},
	'SA-14': {
		family: 'SA',
		name: 'Criticality Analysis',
		description:
			'(A) The organization identifies critical information system components and functions by performing a criticality analysis for [Assignment: organization-defined information systems, information system components, or information system services] at [Assignment: organization-defined decision points in the system development life cycle].',
	},
	'SA-15': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'(A) The organization requires the developer of the information system, system component, or information system service to follow a documented development process that:\n(a) Explicitly addresses security requirements;\n(b) Identifies the standards and tools used in the development process;\n(c) Documents the specific tool options and tool configurations used in the development process; and\n(d) Documents, manages, and ensures the integrity of changes to the process and/or tools used in development.\n(B) The organization reviews the development process, standards, tools, and tool options/configurations [Assignment: organization-defined frequency] to determine if the process, standards, tools, and tool options/configurations selected and employed can satisfy [Assignment: organization-defined security requirements].',
	},
	'SA-15 (1)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | QUALITY METRICS\n(a) The organization requires the developer of the information system, system component, or information system service to define quality metrics at the beginning of the development process; and\n(b) The organization requires the developer of the information system, system component, or information system service to provide evidence of meeting the quality metrics [Selection (one or more): [Assignment: organization-defined frequency]; [Assignment: organization-defined program review milestones]; upon delivery].',
	},
	'SA-15 (2)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | SECURITY TRACKING TOOLS\nThe organization requires the developer of the information system, system component, or information system service to select and employ a security tracking tool for use during the development process.',
	},
	'SA-15 (3)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | CRITICALITY ANALYSIS\nThe organization requires the developer of the information system, system component, or information system service to perform a criticality analysis at [Assignment: organization-defined breadth/depth] and at [Assignment: organization-defined decision points in the system development life cycle].',
	},
	'SA-15 (4)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | THREAT MODELING / VULNERABILITY ANALYSIS\nThe organization requires that developers perform threat modeling and a vulnerability analysis for the information system at [Assignment: organization-defined breadth/depth] that:\n(a) Uses [Assignment: organization-defined information concerning impact, environment of operations, known or assumed threats, and acceptable risk levels];\n(b) Employs [Assignment: organization-defined tools and methods]; and\n(c) Produces evidence that meets [Assignment: organization-defined acceptance criteria].',
	},
	'SA-15 (5)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | ATTACK SURFACE REDUCTION\nThe organization requires the developer of the information system, system component, or information system service to reduce attack surfaces to [Assignment: organization-defined thresholds].',
	},
	'SA-15 (6)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | CONTINUOUS IMPROVEMENT\nThe organization requires the developer of the information system, system component, or information system service to implement an explicit process to continuously improve the development process.',
	},
	'SA-15 (7)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | AUTOMATED VULNERABILITY ANALYSIS\nThe organization requires the developer of the information system, system component, or information system service to:\n(a) Perform an automated vulnerability analysis using [Assignment: organization-defined tools];\n(b) Determine the exploitation potential for discovered vulnerabilities;\n(c) Determine potential risk mitigations for delivered vulnerabilities; and\n(d) Deliver the outputs of the tools and results of the analysis to [Assignment: organization-defined personnel or roles].',
	},
	'SA-15 (8)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | REUSE OF THREAT / VULNERABILITY INFORMATION\nThe organization requires the developer of the information system, system component, or information system service to use threat modeling and vulnerability analyses from similar systems, components, or services to inform the current development process.',
	},
	'SA-15 (9)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | USE OF LIVE DATA\nThe organization approves, documents, and controls the use of live data in development and test environments for the information system, system component, or information system service.',
	},
	'SA-15 (10)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | INCIDENT RESPONSE PLAN\nThe organization requires the developer of the information system, system component, or information system service to provide an incident response plan.',
	},
	'SA-15 (11)': {
		family: 'SA',
		name: 'Development Process, Standards, And Tool',
		description:
			'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS | ARCHIVE INFORMATION SYSTEM / COMPONENT\nThe organization requires the developer of the information system or system component to archive the system or component to be released or delivered together with the corresponding evidence supporting the final security review.',
	},
	'SA-16': {
		family: 'SA',
		name: 'Developer Provided Training',
		description:
			'(A) The organization requires the developer of the information system, system component, or information system service to provide [Assignment: organization-defined training] on the correct use and operation of the implemented security functions, controls, and/or mechanisms.',
	},
	'SA-17': {
		family: 'SA',
		name: 'Developer Security Architecture And Design',
		description:
			'(A) The organization requires the developer of the information system, system component, or information system service to produce a design specification and security architecture that is consistent with and supportive of the organization’s security architecture which is established within and is an integrated part of the organization’s enterprise architecture.\n(B) The organization requires the developer of the information system, system component, or information system service to produce a design specification and security architecture that accurately and completely describes the required security functionality, and the allocation of security controls among physical and logical components.\n(C) The organization requires the developer of the information system, system component, or information system service to produce a design specification and security architecture that expresses how individual security functions, mechanisms, and services work together to provide required security capabilities and a unified approach to protection.',
	},
	'SA-17 (1)': {
		family: 'SA',
		name: 'Developer Security Architecture And Design',
		description:
			'DEVELOPER SECURITY ARCHITECTURE AND DESIGN | FORMAL POLICY MODEL\nThe organization requires the developer of the information system, system component, or information system service to:\n(a) Produce, as an integral part of the development process, a formal policy model describing the [Assignment: organization-defined elements of organizational security policy] to be enforced; and\n(b) Prove that the formal policy model is internally consistent and sufficient to enforce the defined elements of the organizational security policy when implemented.',
	},
	'SA-17 (2)': {
		family: 'SA',
		name: 'Developer Security Architecture And Design',
		description:
			'DEVELOPER SECURITY ARCHITECTURE AND DESIGN | SECURITY-RELEVANT COMPONENTS\nThe organization requires the developer of the information system, system component, or information system service to:\n(a) Define security-relevant hardware, software, and firmware; and\n(b) Provide a rationale that the definition for security-relevant hardware, software, and firmware is complete.',
	},
	'SA-17 (3)': {
		family: 'SA',
		name: 'Developer Security Architecture And Design',
		description:
			'DEVELOPER SECURITY ARCHITECTURE AND DESIGN | FORMAL CORRESPONDENCE\nThe organization requires the developer of the information system, system component, or information system service to:\n(a) Produce, as an integral part of the development process, a formal top-level specification that specifies the interfaces to security-relevant hardware, software, and firmware in terms of exceptions, error messages, and effects;\n(b) Show via proof to the extent feasible with additional informal demonstration as necessary, that the formal top-level specification is consistent with the formal policy model;\n(c) Show via informal demonstration, that the formal top-level specification completely covers the interfaces to security-relevant hardware, software, and firmware;\n(d) Show that the formal top-level specification is an accurate description of the implemented security-relevant hardware, software, and firmware; and\n(e) Describe the security-relevant hardware, software, and firmware mechanisms not addressed in the formal top-level specification but strictly internal to the security-relevant hardware, software, and firmware.',
	},
	'SA-17 (4)': {
		family: 'SA',
		name: 'Developer Security Architecture And Design',
		description:
			'DEVELOPER SECURITY ARCHITECTURE AND DESIGN | INFORMAL CORRESPONDENCE\nThe organization requires the developer of the information system, system component, or information system service to:\n(a) Produce, as an integral part of the development process, an informal descriptive top-level specification that specifies the interfaces to security-relevant hardware, software, and firmware in terms of exceptions, error messages, and effects;\n(b) Show via [Selection: informal demonstration, convincing argument with formal methods as feasible] that the descriptive top-level specification is consistent with the formal policy model;\n(c) Show via informal demonstration, that the descriptive top-level specification completely covers the interfaces to security-relevant hardware, software, and firmware;\n(d) Show that the descriptive top-level specification is an accurate description of the interfaces to security-relevant hardware, software, and firmware; and\n(e) Describe the security-relevant hardware, software, and firmware mechanisms not addressed in the descriptive top-level specification but strictly internal to the security-relevant hardware, software, and firmware.',
	},
	'SA-17 (5)': {
		family: 'SA',
		name: 'Developer Security Architecture And Design',
		description:
			'DEVELOPER SECURITY ARCHITECTURE AND DESIGN | CONCEPTUALLY SIMPLE DESIGN\nThe organization requires the developer of the information system, system component, or information system service to:\n(a) Design and structure the security-relevant hardware, software, and firmware to use a complete, conceptually simple protection mechanism with precisely defined semantics; and\n(b) Internally structure the security-relevant hardware, software, and firmware with specific regard for this mechanism.',
	},
	'SA-17 (6)': {
		family: 'SA',
		name: 'Developer Security Architecture And Design',
		description:
			'DEVELOPER SECURITY ARCHITECTURE AND DESIGN | STRUCTURE FOR TESTING\nThe organization requires the developer of the information system, system component, or information system service to structure security-relevant hardware, software, and firmware to facilitate testing.',
	},
	'SA-17 (7)': {
		family: 'SA',
		name: 'Developer Security Architecture And Design',
		description:
			'DEVELOPER SECURITY ARCHITECTURE AND DESIGN | STRUCTURE FOR LEAST PRIVILEGE\nThe organization requires the developer of the information system, system component, or information system service to structure security-relevant hardware, software, and firmware to facilitate controlling access with least privilege.',
	},
	'SA-18': {
		family: 'SA',
		name: 'Tamper Resistance And Detection',
		description:
			'(A) The organization implements a tamper protection program for the information system, system component, or information system service.',
	},
	'SA-18 (1)': {
		family: 'SA',
		name: 'Tamper Resistance And Detection',
		description:
			'TAMPER RESISTANCE AND DETECTION | MULTIPLE PHASES OF SDLC\nThe organization employs anti-tamper technologies and techniques during multiple phases in the system development life cycle including design, development, integration, operations, and maintenance.',
	},
	'SA-18 (2)': {
		family: 'SA',
		name: 'Tamper Resistance And Detection',
		description:
			'TAMPER RESISTANCE AND DETECTION | INSPECTION OF INFORMATION SYSTEMS, COMPONENTS, OR DEVICES\nThe organization inspects [Assignment: organization-defined information systems, system components, or devices] [Selection (one or more): at random; at [Assignment: organization-defined frequency], upon [Assignment: organization-defined indications of need for inspection]] to detect tampering.',
	},
	'SA-19': {
		family: 'SA',
		name: 'Component Authenticity',
		description:
			'(A) The organization develops and implements anti-counterfeit policy and procedures that include the means to detect and prevent counterfeit components from entering the information system.\n(B) The organization reports counterfeit information system components to [Selection (one or more): source of counterfeit component; [Assignment: organization-defined external reporting organizations]; [Assignment: organization-defined personnel or roles]].',
	},
	'SA-19 (1)': {
		family: 'SA',
		name: 'Component Authenticity',
		description:
			'COMPONENT AUTHENTICITY | ANTI-COUNTERFEIT TRAINING\nThe organization trains [Assignment: organization-defined personnel or roles] to detect counterfeit information system components (including hardware, software, and firmware).',
	},
	'SA-19 (2)': {
		family: 'SA',
		name: 'Component Authenticity',
		description:
			'COMPONENT AUTHENTICITY | CONFIGURATION CONTROL FOR COMPONENT SERVICE / REPAIR\nThe organization maintains configuration control over [Assignment: organization-defined information system components] awaiting service/repair and serviced/repaired components awaiting return to service.',
	},
	'SA-19 (3)': {
		family: 'SA',
		name: 'Component Authenticity',
		description:
			'COMPONENT AUTHENTICITY | COMPONENT DISPOSAL\nThe organization disposes of information system components using [Assignment: organization-defined techniques and methods].',
	},
	'SA-19 (4)': {
		family: 'SA',
		name: 'Component Authenticity',
		description:
			'COMPONENT AUTHENTICITY | ANTI-COUNTERFEIT SCANNING \nThe organization scans for counterfeit information system components [Assignment: organization-defined frequency].',
	},
	'SA-20': {
		family: 'SA',
		name: 'Customized Development Of Critical Components',
		description:
			'(A) The organization re-implements or custom develops [Assignment: organization-defined critical information system components].',
	},
	'SA-21': {
		family: 'SA',
		name: 'Developer Screening',
		description:
			'(A) The organization requires that the developer of [Assignment: organization-defined information system, system component, or information system service] have appropriate access authorizations as determined by assigned [Assignment: organization-defined official government duties].\n(B) The organization requires that the developer of [Assignment: organization-defined information system, system component, or information system service] satisfy [Assignment: organization-defined additional personnel screening criteria].',
	},
	'SA-21 (1)': {
		family: 'SA',
		name: 'Developer Screening',
		description:
			'DEVELOPER SCREENING | VALIDATION OF SCREENING\nThe organization requires the developer of the information system, system component, or information system service take [Assignment: organization-defined actions] to ensure that the required access authorizations and screening criteria are satisfied.',
	},
	'SA-22': {
		family: 'SA',
		name: 'Unsupported System Components',
		description:
			'(A) The organization replaces information system components when support for the components is no longer available from the developer, vendor, or manufacturer.\n(B) The organization provides justification and documents approval for the continued use of unsupported system components required to satisfy mission/business needs.',
	},
	'SA-22 (1)': {
		family: 'SA',
		name: 'Unsupported System Components',
		description:
			'UNSUPPORTED SYSTEM COMPONENTS | ALTERNATIVE SOURCES FOR CONTINUED SUPPORT\nThe organization provides [Selection (one or more): in-house support; [Assignment: organization-defined support from external providers]] for unsupported information system components.',
	},
	'SC-1': {
		family: 'SC',
		name: 'System And Communications Protection Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A system and communications protection policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the system and communications protection policy and associated system and communications protection controls.\n(B) The organization reviews and updates the current:\n(a) System and communications protection policy [Assignment: organization-defined frequency]; and\n(b) System and communications protection procedures [Assignment: organization-defined frequency].',
	},
	'SC-2': {
		family: 'SC',
		name: 'Application Partitioning',
		description:
			'(A) The information system separates user functionality (including user interface services) from information system management functionality.',
	},
	'SC-2 (1)': {
		family: 'SC',
		name: 'Application Partitioning',
		description:
			'APPLICATION PARTITIONING | INTERFACES FOR NON-PRIVILEGED USERS\nThe information system prevents the presentation of information system management-related functionality at an interface for non-privileged users.',
	},
	'SC-3': {
		family: 'SC',
		name: 'Security Function Isolation',
		description:
			'(A) The information system isolates security functions from non-security functions.',
	},
	'SC-3 (1)': {
		family: 'SC',
		name: 'Security Function Isolation',
		description:
			'SECURITY FUNCTION ISOLATION | HARDWARE SEPARATION\nThe information system utilizes underlying hardware separation mechanisms to implement security function isolation.',
	},
	'SC-3 (2)': {
		family: 'SC',
		name: 'Security Function Isolation',
		description:
			'SECURITY FUNCTION ISOLATION | ACCESS / FLOW CONTROL FUNCTIONS\nThe information system isolates security functions enforcing access and information flow control from non-security functions and from other security functions.',
	},
	'SC-3 (3)': {
		family: 'SC',
		name: 'Security Function Isolation',
		description:
			'SECURITY FUNCTION ISOLATION | MINIMIZE NON-SECURITY FUNCTIONALITY\nThe organization minimizes the number of non-security functions included within the isolation boundary containing security functions.',
	},
	'SC-3 (4)': {
		family: 'SC',
		name: 'Security Function Isolation',
		description:
			'SECURITY FUNCTION ISOLATION | MODULE COUPLING AND COHESIVENESS\nThe organization implements security functions as largely independent modules that maximize internal cohesiveness within modules and minimize coupling between modules.',
	},
	'SC-3 (5)': {
		family: 'SC',
		name: 'Security Function Isolation',
		description:
			'SECURITY FUNCTION ISOLATION | LAYERED STRUCTURES\nThe organization implements security functions as a layered structure minimizing interactions between layers of the design and avoiding any dependence by lower layers on the functionality or correctness of higher layers.',
	},
	'SC-4': {
		family: 'SC',
		name: 'Information In Shared Resources',
		description:
			'(A) The information system prevents unauthorized and unintended information transfer via shared system resources.',
	},
	'SC-4 (1)': {
		family: 'SC',
		name: 'Information In Shared Resources',
		description: 'INFORMATION IN SHARED RESOURCES | SECURITY LEVELS',
	},
	'SC-4 (2)': {
		family: 'SC',
		name: 'Information In Shared Resources',
		description:
			'INFORMATION IN SHARED RESOURCES | PERIODS PROCESSING\nThe information system prevents unauthorized information transfer via shared resources in accordance with [Assignment: organization-defined procedures] when system processing explicitly switches between different information classification levels or security categories.',
	},
	'SC-5': {
		family: 'SC',
		name: 'Denial Of Service Protection',
		description:
			'(A) The information system protects against or limits the effects of the following types of denial of service attacks: [Assignment: organization-defined types of denial of service attacks or reference to source for such information] by employing [Assignment: organization-defined security safeguards].',
	},
	'SC-5 (1)': {
		family: 'SC',
		name: 'Denial Of Service Protection',
		description:
			'DENIAL OF SERVICE PROTECTION | RESTRICT INTERNAL USERS\nThe information system restricts the ability of individuals to launch [Assignment: organization-defined denial of service attacks] against other information systems.',
	},
	'SC-5 (2)': {
		family: 'SC',
		name: 'Denial Of Service Protection',
		description:
			'DENIAL OF SERVICE PROTECTION | EXCESS CAPACITY / BANDWIDTH / REDUNDANCY\nThe information system manages excess capacity, bandwidth, or other redundancy to limit the effects of information flooding denial of service attacks.',
	},
	'SC-5 (3)': {
		family: 'SC',
		name: 'Denial Of Service Protection',
		description:
			'DENIAL OF SERVICE PROTECTION | DETECTION / MONITORING\n(a) The organization employs [Assignment: organization-defined monitoring tools] to detect indicators of denial of service attacks against the information system; and\n(b) The organization monitors [Assignment: organization-defined information system resources] to determine if sufficient resources exist to prevent effective denial of service attacks.',
	},
	'SC-6': {
		family: 'SC',
		name: 'Resource Availability',
		description:
			'(A) The information system protects the availability of resources by allocating [Assignment: organization-defined resources] by [Selection (one or more); priority; quota; [Assignment: organization-defined security safeguards]].',
	},
	'SC-7': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'(A) The information system monitors and controls communications at the external boundary of the system and at key internal boundaries within the system.\n(B) The information system implements sub-networks for publicly accessible system components that are [Selection: physically; logically] separated from internal organizational networks.\n(C) The information system connects to external networks or information systems only through managed interfaces consisting of boundary protection devices arranged in accordance with an organizational security architecture.',
	},
	'SC-7 (1)': {
		family: 'SC',
		name: 'Boundary Protection',
		description: 'BOUNDARY PROTECTION | PHYSICALLY SEPARATED SUBNETWORKS',
	},
	'SC-7 (2)': {
		family: 'SC',
		name: 'Boundary Protection',
		description: 'BOUNDARY PROTECTION | PUBLIC ACCESS',
	},
	'SC-7 (3)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | ACCESS POINTS\nThe organization limits the number of external network connections to the information system.',
	},
	'SC-7 (4)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | EXTERNAL TELECOMMUNICATIONS SERVICES\n(a) The organization implements a managed interface for each external telecommunication service;\n(b) The organization establishes a traffic flow policy for each managed interface;\n(c) The organization protects the confidentiality and integrity of the information being transmitted across each interface;\n(d) The organization documents each exception to the traffic flow policy with a supporting mission/business need and duration of that need; and\n(e) The organization reviews exceptions to the traffic flow policy [Assignment: organization-defined frequency] and removes exceptions that are no longer supported by an explicit mission/business need.',
	},
	'SC-7 (5)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | DENY BY DEFAULT / ALLOW BY EXCEPTION\nThe information system at managed interfaces denies network communications traffic by default and allows network communications traffic by exception (i.e., deny all, permit by exception).',
	},
	'SC-7 (6)': {
		family: 'SC',
		name: 'Boundary Protection',
		description: 'BOUNDARY PROTECTION | RESPONSE TO RECOGNIZED FAILURES',
	},
	'SC-7 (7)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | PREVENT SPLIT TUNNELLING FOR REMOTE DEVICES\nThe information system, in conjunction with a remote device, prevents the device from simultaneously establishing non-remote connections with the system and communicating via some other connection to resources in external networks.',
	},
	'SC-7 (8)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | ROUTE TRAFFIC TO AUTHENTICATED PROXY SERVERS\nThe information system routes [Assignment: organization-defined internal communications traffic] to [Assignment: organization-defined external networks] through authenticated proxy servers at managed interfaces.',
	},
	'SC-7 (9)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | RESTRICT THREATENING OUTGOING COMMUNICATIONS TRAFFIC\n(a) The information system detects and denies outgoing communications traffic posing a threat to external information systems; and\n(b) The information system audits the identity of internal users associated with denied communications.',
	},
	'SC-7 (10)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | PREVENT UNAUTHORIZED EXFILTRATION\nThe organization prevents the unauthorized exfiltration of information across managed interfaces.',
	},
	'SC-7 (11)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | RESTRICT INCOMING COMMUNICATIONS TRAFFIC\nThe information system only allows incoming communications from [Assignment: organization-defined authorized sources] routed to [Assignment: organization-defined authorized destinations].',
	},
	'SC-7 (12)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | HOST-BASED PROTECTION\nThe organization implements [Assignment: organization-defined host-based boundary protection mechanisms] at [Assignment: organization-defined information system components].',
	},
	'SC-7 (13)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | ISOLATION OF SECURITY TOOLS / MECHANISMS / SUPPORT COMPONENTS\nThe organization isolates [Assignment: organization-defined information security tools, mechanisms, and support components] from other internal information system components by implementing physically separate sub-networks with managed interfaces to other components of the system.',
	},
	'SC-7 (14)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | PROTECTS AGAINST UNAUTHORIZED PHYSICAL CONNECTIONS\nThe organization protects against unauthorized physical connections at [Assignment: organization-defined managed interfaces].',
	},
	'SC-7 (15)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | ROUTE PRIVILEGED NETWORK ACCESSES\nThe information system routes all networked, privileged accesses through a dedicated, managed interface for purposes of access control and auditing.',
	},
	'SC-7 (16)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | PREVENT DISCOVERY OF COMPONENTS / DEVICES\nThe information system prevents discovery of specific system components composing a managed interface.',
	},
	'SC-7 (17)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | AUTOMATED ENFORCEMENT OF PROTOCOL FORMATS\nThe information system enforces adherence to protocol formats.',
	},
	'SC-7 (18)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | FAIL SECURE\nThe information system fails securely in the event of an operational failure of a boundary protection device.',
	},
	'SC-7 (19)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | BLOCKS COMMUNICATION FROM NON-ORGANIZATIONALLY CONFIGURED HOSTS\nThe information system blocks both inbound and outbound communications traffic between [Assignment: organization-defined communication clients] that are independently configured by end users and external service providers.',
	},
	'SC-7 (20)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | DYNAMIC ISOLATION / SEGREGATION\nThe information system provides the capability to dynamically isolate/segregate [Assignment: organization-defined information system components] from other components of the system.',
	},
	'SC-7 (21)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | ISOLATION OF INFORMATION SYSTEM COMPONENTS\nThe organization employs boundary protection mechanisms to separate [Assignment: organization-defined information system components] supporting [Assignment: organization-defined missions and/or business functions].',
	},
	'SC-7 (22)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | SEPARATE SUBNETS FOR CONNECTING TO DIFFERENT SECURITY DOMAINS\nThe information system implements separate network addresses (i.e., different subnets) to connect to systems in different security domains.',
	},
	'SC-7 (23)': {
		family: 'SC',
		name: 'Boundary Protection',
		description:
			'BOUNDARY PROTECTION | DISABLE SENDER FEEDBACK ON PROTOCOL VALIDATION FAILURE\nThe information system disables feedback to senders on protocol format validation failure.',
	},
	'SC-8': {
		family: 'SC',
		name: 'Transmission Confidentiality And Integrity',
		description:
			'(A) The information system protects the [Selection (one or more): confidentiality; integrity] of transmitted information.',
	},
	'SC-8 (1)': {
		family: 'SC',
		name: 'Transmission Confidentiality And Integrity',
		description:
			'TRANSMISSION CONFIDENTIALITY AND INTEGRITY | CRYPTOGRAPHIC OR ALTERNATE PHYSICAL PROTECTION\nThe information system implements cryptographic mechanisms to [Selection (one or more): prevent unauthorized disclosure of information; detect changes to information] during transmission unless otherwise protected by [Assignment: organization-defined alternative physical safeguards]. The cryptography must be compliant with the requirements of control SC-13.',
	},
	'SC-8 (2)': {
		family: 'SC',
		name: 'Transmission Confidentiality And Integrity',
		description:
			'TRANSMISSION CONFIDENTIALITY AND INTEGRITY | PRE / POST TRANSMISSION HANDLING\nThe information system maintains the [Selection (one or more): confidentiality; integrity] of information during preparation for transmission and during reception.',
	},
	'SC-8 (3)': {
		family: 'SC',
		name: 'Transmission Confidentiality And Integrity',
		description:
			'TRANSMISSION CONFIDENTIALITY AND INTEGRITY | CRYPTOGRAPHIC PROTECTION FOR MESSAGE EXTERNALS\nThe information system implements cryptographic mechanisms to protect message externals unless otherwise protected by [Assignment: organization-defined alternative physical safeguards].',
	},
	'SC-8 (4)': {
		family: 'SC',
		name: 'Transmission Confidentiality And Integrity',
		description:
			'TRANSMISSION CONFIDENTIALITY AND INTEGRITY | CONCEAL / RANDOMIZE COMMUNICATIONS\nThe information system implements cryptographic mechanisms to conceal or randomize communication patterns unless otherwise protected by [Assignment: organization-defined alternative physical safeguards].',
	},
	'SC-9': {
		family: 'SC',
		name: 'Transmission Confidentiality',
		description: '',
	},
	'SC-10': {
		family: 'SC',
		name: 'Network Disconnect',
		description:
			'(A) The information system terminates the network connection associated with a communications session at the end of the session or after [Assignment: organization-defined time period] of inactivity.',
	},
	'SC-11': {
		family: 'SC',
		name: 'Trusted Path',
		description:
			'(A) The information system establishes a trusted communications path between the user and the following security functions of the system: [Assignment: organization-defined security functions to include at a minimum, information system authentication and re-authentication].',
	},
	'SC-11 (1)': {
		family: 'SC',
		name: 'Trusted Path',
		description:
			'TRUSTED PATH | LOGICAL ISOLATION\nThe information system provides a trusted communications path that is logically isolated and distinguishable from other paths.',
	},
	'SC-12': {
		family: 'SC',
		name: 'Cryptographic Key Establishment And Management',
		description:
			'(A) The organization establishes and manages cryptographic keys for required cryptography employed within the information system in accordance with [Assignment: organization-defined requirements for key generation, distribution, storage, access, and destruction].',
	},
	'SC-12 (1)': {
		family: 'SC',
		name: 'Cryptographic Key Establishment And Management',
		description:
			'CRYPTOGRAPHIC KEY ESTABLISHMENT AND MANAGEMENT | AVAILABILITY\nThe organization maintains availability of information in the event of the loss of cryptographic keys by users.',
	},
	'SC-12 (2)': {
		family: 'SC',
		name: 'Cryptographic Key Establishment And Management',
		description:
			'CRYPTOGRAPHIC KEY ESTABLISHMENT AND MANAGEMENT | SYMMETRIC KEYS\nThe organization produces, controls, and distributes symmetric cryptographic keys using [Selection: CSE-compliant; CSE-approved] key management technology and processes.',
	},
	'SC-12 (3)': {
		family: 'SC',
		name: 'Cryptographic Key Establishment And Management',
		description:
			'CRYPTOGRAPHIC KEY ESTABLISHMENT AND MANAGEMENT | ASYMMETRIC KEYS\nThe organization produces, controls, and distributes asymmetric cryptographic keys using [Selection: CSE-approved key management technology and processes; approved PKI medium assurance certificates or prepositioned keying material; approved medium assurance or high assurance certificates and hardware security tokens that protect the user’s private key].',
	},
	'SC-12 (4)': {
		family: 'SC',
		name: 'Cryptographic Key Establishment And Management',
		description:
			'CRYPTOGRAPHIC KEY ESTABLISHMENT AND MANAGEMENT | PKI CERTIFICATES',
	},
	'SC-12 (5)': {
		family: 'SC',
		name: 'Cryptographic Key Establishment And Management',
		description:
			'CRYPTOGRAPHIC KEY ESTABLISHMENT AND MANAGEMENT | PKI CERTIFICATES / HARDWARE TOKENS',
	},
	'SC-13': {
		family: 'SC',
		name: 'Cryptographic Protection',
		description:
			'(A) The information system implements [Assignment: organization-defined cryptographic uses and type of cryptography required for each use] in accordance with applicable GC legislation and TBS policies, directives and standards.',
	},
	'SC-13 (1)': {
		family: 'SC',
		name: 'Cryptographic Protection',
		description: 'CRYPTOGRAPHIC PROTECTION | FIPS-VALIDATED CRYPTOGRAPHY',
	},
	'SC-13 (2)': {
		family: 'SC',
		name: 'Cryptographic Protection',
		description: 'CRYPTOGRAPHIC PROTECTION | NSA-APPROVED CRYPTOGRAPHY',
	},
	'SC-13 (3)': {
		family: 'SC',
		name: 'Cryptographic Protection',
		description:
			'CRYPTOGRAPHIC PROTECTION | INDIVIDUALS WITHOUT FORMAL ACCESS APPROVALS',
	},
	'SC-13 (4)': {
		family: 'SC',
		name: 'Cryptographic Protection',
		description: 'CRYPTOGRAPHIC PROTECTION | DIGITAL SIGNATURES',
	},
	'SC-13 (100)': {
		family: 'SC',
		name: 'Cryptographic Protection',
		description:
			'The organization employs CMVP-validated cryptography to protect Protected A data in transmission.',
	},
	'SC-13 (101)': {
		family: 'SC',
		name: 'Cryptographic Protection',
		description:
			'The organization employs CMVP-validated cryptography to protect Protected B data in transmission.',
	},
	'SC-13 (102)': {
		family: 'SC',
		name: 'Cryptographic Protection',
		description:
			'The organization employs CSE-approved cryptography to protect Protected C data in transmission.',
	},
	'SC-13 (103)': {
		family: 'SC',
		name: 'Cryptographic Protection',
		description:
			'The organization employs [Selection: CMVP-validated; CSE-approved] cryptography to protect Protected [selection: organizationally-defined data] at rest.',
	},
	'SC-13 (104)': {
		family: 'SC',
		name: 'Cryptographic Protection',
		description:
			'The organization uses COMSEC equipment in accordance with CSE ITSD-01 Directives for the Application of Communications Security in the Government of Canada [Reference 14].',
	},
	'SC-14': {
		family: 'SC',
		name: 'Public Access Protections',
		description: '',
	},
	'SC-15': {
		family: 'SC',
		name: 'Collaborative Computing Devices',
		description:
			'(A) The information system prohibits remote activation of collaborative computing devices with the following exceptions: [Assignment: organization-defined exceptions where remote activation is to be allowed].\n(B) The information system provides an explicit indication of use to users physically present at the devices.',
	},
	'SC-15 (1)': {
		family: 'SC',
		name: 'Collaborative Computing Devices',
		description:
			'COLLABORATIVE COMPUTING DEVICES | PHYSICAL DISCONNECT\nThe information system provides physical disconnect of collaborative computing devices in a manner that supports ease of use.',
	},
	'SC-15 (2)': {
		family: 'SC',
		name: 'Collaborative Computing Devices',
		description:
			'COLLABORATIVE COMPUTING DEVICES | BLOCKING INBOUND / OUTBOUND COMMUNICATIONS TRAFFIC',
	},
	'SC-15 (3)': {
		family: 'SC',
		name: 'Collaborative Computing Devices',
		description:
			'COLLABORATIVE COMPUTING DEVICES | DISABLING / REMOVAL IN SECURE WORK AREAS\nThe organization disables or removes collaborative computing devices from [Assignment: organization-defined information systems or information system components] in [Assignment: organization-defined secure work areas].',
	},
	'SC-15 (4)': {
		family: 'SC',
		name: 'Collaborative Computing Devices',
		description:
			'COLLABORATIVE COMPUTING DEVICES | EXPLICITLY INDICATE CURRENT PARTICIPANTS\nThe information system provides an explicit indication of current participants in [Assignment: organization-defined online meetings and teleconferences].',
	},
	'SC-16': {
		family: 'SC',
		name: 'Transmission Of Security Attributes',
		description:
			'(A) The information system associates [Assignment: organization-defined security attributes] with information exchanged between information systems and between system components.',
	},
	'SC-16 (1)': {
		family: 'SC',
		name: 'Transmission Of Security Attributes',
		description:
			'TRANSMISSION OF SECURITY ATTRIBUTES | INTEGRITY VALIDATION\nThe information system validates the integrity of transmitted security attributes.',
	},
	'SC-17': {
		family: 'SC',
		name: 'Public Key Infrastructure Certificates',
		description:
			'(A) The organization issues public key certificates under an [Assignment: organization-defined certificate policy] or obtains public key certificates from an approved service provider.',
	},
	'SC-18': {
		family: 'SC',
		name: 'Mobile Code',
		description:
			'(A) The organization defines acceptable and unacceptable mobile code and mobile code technologies.\n(B) The organization establishes usage restrictions and implementation guidance for acceptable mobile code and mobile code technologies.\n(C) The organization authorizes, monitors, and controls the use of mobile code within the information system.',
	},
	'SC-18 (1)': {
		family: 'SC',
		name: 'Mobile Code',
		description:
			'MOBILE CODE | IDENTIFY UNACCEPTABLE CODE / TAKE CORRECTIVE ACTIONS\nThe information system identifies [Assignment: organization-defined unacceptable mobile code] and takes [Assignment: organization-defined corrective actions].',
	},
	'SC-18 (2)': {
		family: 'SC',
		name: 'Mobile Code',
		description:
			'MOBILE CODE | ACQUISITION / DEVELOPMENT / USE\nThe organization ensures that the acquisition, development, and use of mobile code to be deployed in the information system meet [Assignment: organization-defined mobile code requirements].',
	},
	'SC-18 (3)': {
		family: 'SC',
		name: 'Mobile Code',
		description:
			'MOBILE CODE | PREVENT DOWNLOADING / EXECUTION\nThe information system prevents the download and execution of [Assignment: organization-defined unacceptable mobile code].',
	},
	'SC-18 (4)': {
		family: 'SC',
		name: 'Mobile Code',
		description:
			'MOBILE CODE | PREVENT AUTOMATIC EXECUTION\nThe information system prevents the automatic execution of mobile code in [Assignment: organization-defined software applications] and enforces [Assignment: organization-defined actions] prior to executing the code.',
	},
	'SC-18 (5)': {
		family: 'SC',
		name: 'Mobile Code',
		description:
			'MOBILE CODE | ALLOW EXECUTION ONLY IN CONFINED ENVIRONMENTS\nThe organization allows execution of permitted mobile code only in confined virtual machine environments.',
	},
	'SC-19': {
		family: 'SC',
		name: 'Voice Over Internet Protocol',
		description:
			'(A) The organization establishes usage restrictions and implementation guidance for Voice over Internet Protocol (VoIP) technologies based on the potential to cause damage to the information system if used maliciously.\n(B) The organization authorizes, monitors, and controls the use of VoIP within the information system.',
	},
	'SC-19 (100)': {
		family: 'SC',
		name: 'Voice Over Internet Protocol',
		description:
			'Unclassified VoIP is not permitted within classified facilities unless the VoIP is converted to POTS before exiting the facility boundary.',
	},
	'SC-19 (101)': {
		family: 'SC',
		name: 'Voice Over Internet Protocol',
		description:
			'Unclassified VoIP over a Local Area Network (LAN) with access to a public data network is not permitted within classified facilities.',
	},
	'SC-20': {
		family: 'SC',
		name: 'Secure Name / Address Resolution Service (Authoritative Source)',
		description:
			'(A) The information system provides additional data origin authentication and integrity verification artifacts along with the authoritative name resolution data the system returns in response to external name/address resolution queries.\n(B) The information system provides the means to indicate the security status of child zones and (if the child supports secure resolution services) to enable verification of a chain of trust among parent and child domains, when operating as part of a distributed, hierarchical namespace.',
	},
	'SC-20 (1)': {
		family: 'SC',
		name: 'Secure Name / Address Resolution Service (Authoritative Source)',
		description:
			'SECURE NAME / ADDRESS RESOLUTION SERVICE (AUTHORITATIVE SOURCE) | CHILD SUBSPACES',
	},
	'SC-20 (2)': {
		family: 'SC',
		name: 'Secure Name / Address Resolution Service (Authoritative Source)',
		description:
			'SECURE NAME / ADDRESS RESOLUTION SERVICE (AUTHORITATIVE SOURCE) | DATA ORIGIN / INTEGRITY\nThe information system provides data origin and integrity protection artifacts for internal name/address resolution queries.',
	},
	'SC-21': {
		family: 'SC',
		name:
			'Secure Name / Address Resolution Service (Recursive Or Caching Resolver)',
		description:
			'(A) The information system requests and performs data origin authentication and data integrity verification on the name/address resolution responses the system receives from authoritative sources.',
	},
	'SC-21 (1)': {
		family: 'SC',
		name:
			'Secure Name / Address Resolution Service (Recursive Or Caching Resolver)',
		description:
			'SECURE NAME / ADDRESS RESOLUTION SERVICE (RECURSIVE OR CACHING RESOLVER) | DATA ORIGIN / INTEGRITY',
	},
	'SC-22': {
		family: 'SC',
		name: 'Architecture And Provisioning For Name / Address Resolution Service',
		description:
			'(A) The information systems that collectively provide name/address resolution service for an organization are fault-tolerant and implement internal/external role separation.',
	},
	'SC-23': {
		family: 'SC',
		name: 'Session Authenticity',
		description:
			'(A) The information system protects the authenticity of communications sessions.',
	},
	'SC-23 (1)': {
		family: 'SC',
		name: 'Session Authenticity',
		description:
			'SESSION AUTHENTICITY | INVALIDATE SESSION IDENTIFIERS AT LOGOUT\nThe information system invalidates session identifiers upon user logout or other session termination.',
	},
	'SC-23 (2)': {
		family: 'SC',
		name: 'Session Authenticity',
		description:
			'SESSION AUTHENTICITY | USER-INITIATED LOGOUTS / MESSAGE DISPLAYS',
	},
	'SC-23 (3)': {
		family: 'SC',
		name: 'Session Authenticity',
		description:
			'SESSION AUTHENTICITY | UNIQUE SESSION IDENTIFIERS WITH RANDOMIZATION\nThe information system generates a unique session identifier for each session with [Assignment: organization-defined randomness requirements] and recognizes only session identifiers that are system-generated.',
	},
	'SC-23 (4)': {
		family: 'SC',
		name: 'Session Authenticity',
		description:
			'SESSION AUTHENTICITY | UNIQUE SESSION IDENTIFIERS WITH RANDOMIZATION',
	},
	'SC-23 (5)': {
		family: 'SC',
		name: 'Session Authenticity',
		description:
			'SESSION AUTHENTICITY | ALLOWED CERTIFICATE AUTHORITIES\nThe information system only allows the use of [Assignment: organization-defined certificate authorities] for verification of the establishment of protected sessions.',
	},
	'SC-24': {
		family: 'SC',
		name: 'Fail In Known State',
		description:
			'(A) The information system fails to a [Assignment: organization-defined known-state] for [Assignment: organization-defined types of failures] preserving [Assignment: organization-defined system state information] in failure.',
	},
	'SC-25': {
		family: 'SC',
		name: 'Thin Nodes',
		description:
			'(A) The organization employs [Assignment: organization-defined information system components] with minimal functionality and information storage.',
	},
	'SC-26': {
		family: 'SC',
		name: 'Honeypots',
		description:
			'(A) The information system includes components specifically designed to be the target of malicious attacks for the purpose of detecting, deflecting, and analyzing such attacks.',
	},
	'SC-26 (1)': {
		family: 'SC',
		name: 'Honeypots',
		description: 'HONEYPOTS | DETECTION OF MALICIOUS CODE',
	},
	'SC-27': {
		family: 'SC',
		name: 'Platform-Independent Applications',
		description:
			'(A) The information system includes: [Assignment: organization-defined platform-independent applications].',
	},
	'SC-28': {
		family: 'SC',
		name: 'Protection Of Information At Rest',
		description:
			'(A) The information system protects the [Selection (one or more): confidentiality; integrity] of [Assignment: organization-defined information at rest].',
	},
	'SC-28 (1)': {
		family: 'SC',
		name: 'Protection Of Information At Rest',
		description:
			'PROTECTION OF INFORMATION AT REST | CRYPTOGRAPHIC PROTECTION\nThe information system implements cryptographic mechanisms to prevent unauthorized disclosure and modification of [Assignment: organization-defined information] on [Assignment: organization-defined information system components].',
	},
	'SC-28 (2)': {
		family: 'SC',
		name: 'Protection Of Information At Rest',
		description:
			'PROTECTION OF INFORMATION AT REST | OFF-LINE STORAGE\nThe organization removes from online storage and stores off-line in a secure location [Assignment: organization-defined information].',
	},
	'SC-29': {
		family: 'SC',
		name: 'Heterogeneity',
		description:
			'(A) The organization employs a diverse set of information technologies for [Assignment: organization-defined information system components] in the implementation of the information system.',
	},
	'SC-29 (1)': {
		family: 'SC',
		name: 'Heterogeneity',
		description:
			'HETEROGENEITY | VIRTUALIZATION TECHNIQUES\nThe organization employs virtualization techniques to support the deployment of a diversity of operating systems and applications that are changed [Assignment: organization-defined frequency].',
	},
	'SC-30': {
		family: 'SC',
		name: 'Concealment And Misdirection',
		description:
			'(A) The organization employs [Assignment: organization-defined concealment and misdirection techniques] for [Assignment: organization-defined information systems] at [Assignment: organization-defined time periods] to confuse and mislead adversaries.',
	},
	'SC-30 (1)': {
		family: 'SC',
		name: 'Concealment And Misdirection',
		description: 'CONCEALMENT AND MISDIRECTION | VIRTUALIZATION TECHNIQUES',
	},
	'SC-30 (2)': {
		family: 'SC',
		name: 'Concealment And Misdirection',
		description:
			'CONCEALMENT AND MISDIRECTION | RANDOMNESS\nThe organization employs [Assignment: organization-defined techniques] to introduce randomness into organizational operations and assets.',
	},
	'SC-30 (3)': {
		family: 'SC',
		name: 'Concealment And Misdirection',
		description:
			'CONCEALMENT AND MISDIRECTION | CHANGE PROCESSING / STORAGE LOCATIONS\nThe organization changes the location of [Assignment: organization-defined processing and/or storage] [Selection: [Assignment: organization-defined time frequency]; at random time intervals]].',
	},
	'SC-30 (4)': {
		family: 'SC',
		name: 'Concealment And Misdirection',
		description:
			'CONCEALMENT AND MISDIRECTION | MISLEADING INFORMATION\nThe organization employs realistic, but misleading information in [Assignment: organization-defined information system components] with regard to its security state or posture.',
	},
	'SC-30 (5)': {
		family: 'SC',
		name: 'Concealment And Misdirection',
		description:
			'CONCEALMENT AND MISDIRECTION | CONCEALMENT OF SYSTEM COMPONENTS\nThe organization employs [Assignment: organization-defined techniques] to hide or conceal [Assignment: organization-defined information system components].',
	},
	'SC-31': {
		family: 'SC',
		name: 'Covert Channel Analysis',
		description:
			'(A) The organization performs a covert channel analysis to identify those aspects of communications within the information system that are potential avenues for covert [Selection (one or more): storage; timing] channels.\n(B) The organization estimates the maximum bandwidth of those channels.',
	},
	'SC-31 (1)': {
		family: 'SC',
		name: 'Covert Channel Analysis',
		description:
			'COVERT CHANNEL ANALYSIS | TEST COVERT CHANNELS FOR EXPLOITABILITY\nThe organization tests a subset of the identified covert channels to determine which channels are exploitable.',
	},
	'SC-31 (2)': {
		family: 'SC',
		name: 'Covert Channel Analysis',
		description:
			'COVERT CHANNEL ANALYSIS | LIMIT MAXIMUM BANDWIDTH\nThe organization reduces the maximum bandwidth for identified covert [Selection (one or more); storage; timing] channels to [Assignment: organization-defined values].\n',
	},
	'SC-31 (3)': {
		family: 'SC',
		name: 'Covert Channel Analysis',
		description:
			'COVERT CHANNEL ANALYSIS | MEASURE BANDWIDTH IN OPERATIONAL ENVIRONMENTS\nThe organization measures the bandwidth of [Assignment: organization-defined subset of identified covert channels] in the operational environment of the information system.',
	},
	'SC-32': {
		family: 'SC',
		name: 'Information System Partitioning',
		description:
			'(A) The organization partitions the information system into [Assignment: organization-defined information system components] residing in separate physical domains or environments based on [Assignment: organization-defined circumstances for physical separation of components].',
	},
	'SC-33': {
		family: 'SC',
		name: 'Transmission Preparation Integrity',
		description: '',
	},
	'SC-34': {
		family: 'SC',
		name: 'Non-Modifiable Executable Programs',
		description:
			'(A) The information system at [Assignment: organization-defined information system components] loads and executes the operating environment from hardware-enforced, read-only media.\n(B) The information system at [Assignment: organization-defined information system components] loads and executes [Assignment: organization-defined applications] from hardware-enforced, read-only media.',
	},
	'SC-34 (1)': {
		family: 'SC',
		name: 'Non-Modifiable Executable Programs',
		description:
			'NON-MODIFIABLE EXECUTABLE PROGRAMS | NO WRITABLE STORAGE\nThe organization employs [Assignment: organization-defined information system components] with no writeable storage that is persistent across component restart or power on/off.',
	},
	'SC-34 (2)': {
		family: 'SC',
		name: 'Non-Modifiable Executable Programs',
		description:
			'NON-MODIFIABLE EXECUTABLE PROGRAMS | INTEGRITY PROTECTION / READ-ONLY MEDIA\nThe organization protects the integrity of information prior to storage on read-only media and controls the media after such information has been recorded onto the media.',
	},
	'SC-34 (3)': {
		family: 'SC',
		name: 'Non-Modifiable Executable Programs',
		description:
			'NON-MODIFIABLE EXECUTABLE PROGRAMS | HARDWARE-BASED PROTECTION\n(a) The organization employs hardware-based, write-protect for [Assignment: organization-defined information system firmware components]; and\n(b) The organization implements specific procedures for [Assignment: organization-defined authorized individuals] to manually disable hardware write-protect for firmware modifications and re-enable the write-protect prior to returning to operational mode.',
	},
	'SC-35': {
		family: 'SC',
		name: 'Honeyclients',
		description:
			'(A) The information system includes components that proactively seek to identify malicious websites and/or web-based malicious code.',
	},
	'SC-36': {
		family: 'SC',
		name: 'Distributed Processing And Storage',
		description:
			'(A) The organization distributes [Assignment: organization-defined processing and storage] across multiple physical locations.',
	},
	'SC-36 (1)': {
		family: 'SC',
		name: 'Distributed Processing And Storage',
		description:
			'DISTRIBUTED PROCESSING AND STORAGE | POLLING TECHNIQUES\nThe organization employs polling techniques to identify potential faults, errors, or compromises to [Assignment: organization-defined distributed processing and storage components].',
	},
	'SC-37': {
		family: 'SC',
		name: 'Out-Of-Band Channels',
		description:
			'(A) The organization employs [Assignment: organization-defined out-of-band channels] for the physical delivery or electronic transmission of [Assignment: organization-defined information, information system components, or devices] to [Assignment: organization-defined individuals or information systems].',
	},
	'SC-37 (1)': {
		family: 'SC',
		name: 'Out-Of-Band Channels',
		description:
			'OUT-OF-BAND CHANNELS | ENSURE DELIVERY / TRANSMISSION\nThe organization employs [Assignment: organization-defined security safeguards] to ensure that only [Assignment: organization-defined individuals or information systems] receive the [Assignment: organization-defined information, information system components, or devices].',
	},
	'SC-38': {
		family: 'SC',
		name: 'Operations Security',
		description:
			'(A) The organization employs [Assignment: organization-defined operations security safeguards] to protect key organizational information throughout the system development life cycle.',
	},
	'SC-39': {
		family: 'SC',
		name: 'Process Isolation',
		description:
			'(A) The information system maintains a separate execution domain for each executing process.',
	},
	'SC-39 (1)': {
		family: 'SC',
		name: 'Process Isolation',
		description:
			'PROCESS ISOLATION | HARDWARE SEPARATION\nThe information system implements underlying hardware separation mechanisms to facilitate process separation.',
	},
	'SC-39 (2)': {
		family: 'SC',
		name: 'Process Isolation',
		description:
			'PROCESS ISOLATION | THREAD ISOLATION \nThe information system maintains a separate execution domain for each thread in [Assignment: organization-defined multi-threaded processing].\n',
	},
	'SC-40': {
		family: 'SC',
		name: 'Wireless Link Protection',
		description:
			'(A) The information system protects external and internal [Assignment: organization-defined wireless links] from [Assignment: organization-defined types of signal parameter attacks or references to sources for such attacks].',
	},
	'SC-40 (1)': {
		family: 'SC',
		name: 'Wireless Link Protection',
		description:
			'WIRELESS LINK PROTECTION | ELECTROMAGNETIC INTERFERENCE\nThe information system implements cryptographic mechanisms that achieve [Assignment: organization-defined level of protection] against the effects of intentional electromagnetic interference.',
	},
	'SC-40 (2)': {
		family: 'SC',
		name: 'Wireless Link Protection',
		description:
			'WIRELESS LINK PROTECTION | REDUCE DETECTION POTENTIAL\nThe information system implements cryptographic mechanisms to reduce the detection potential of wireless links to [Assignment: organization-defined level of reduction].',
	},
	'SC-40 (3)': {
		family: 'SC',
		name: 'Wireless Link Protection',
		description:
			'WIRELESS LINK PROTECTION | IMITATIVE OR MANIPULATIVE COMMUNICATIONS DECEPTION\nThe information system implements cryptographic mechanisms to identify and reject wireless transmissions that are deliberate attempts to achieve imitative or manipulative communications deception based on signal parameters.',
	},
	'SC-40 (4)': {
		family: 'SC',
		name: 'Wireless Link Protection',
		description:
			'WIRELESS LINK PROTECTION | SIGNAL PARAMETER IDENTIFICATION\nThe information system implements cryptographic mechanisms to prevent the identification of [Assignment: organization-defined wireless transmitters] by using the transmitter signal parameters.',
	},
	'SC-41': {
		family: 'SC',
		name: 'Port And I/O Device Access',
		description:
			'(A) The organization physically disables or removes [Assignment: organization-defined connection ports or input/output devices] on [Assignment: organization-defined information systems or information system components].',
	},
	'SC-42': {
		family: 'SC',
		name: 'Sensor Capability And Data',
		description:
			'(A) The information system prohibits the remote activation of environmental sensing capabilities with the following exceptions: [Assignment: organization-defined exceptions where remote activation of sensors is allowed].\n(B) The information system provides an explicit indication of sensor use to [Assignment: organization-defined class of users].',
	},
	'SC-42 (1)': {
		family: 'SC',
		name: 'Sensor Capability And Data',
		description:
			'SENSOR CAPABILITY AND DATA | REPORTING TO AUTHORIZED INDIVIDUALS OR ROLES\nThe organization ensures that the information system is configured so that data or information collected by the [Assignment: organization-defined sensors] is only reported to authorized individuals or roles.',
	},
	'SC-42 (2)': {
		family: 'SC',
		name: 'Sensor Capability And Data',
		description:
			'SENSOR CAPABILITY AND DATA | AUTHORIZED USE\nThe organization employs the following measures: [Assignment: organization-defined measures], so that data or information collected by [Assignment: organization-defined sensors] is only used for authorized purposes.',
	},
	'SC-42 (3)': {
		family: 'SC',
		name: 'Sensor Capability And Data',
		description:
			'SENSOR CAPABILITY AND DATA | PROHIBIT USE OF DEVICES\nThe organization prohibits the use of devices possessing [Assignment: organization-defined environmental sensing capabilities] in [Assignment: organization-defined facilities, areas, or systems].',
	},
	'SC-43': {
		family: 'SC',
		name: 'Usage Restrictions',
		description:
			'(A) The organization establishes usage restrictions and implementation guidance for [Assignment: organization-defined information system components] based on the potential to cause damage to the information system if used maliciously.\n(B) The organization authorizes, monitors, and controls the use of such components within the information system.',
	},
	'SC-44': {
		family: 'SC',
		name: 'Detonation Chambers',
		description:
			'(A) The organization employs a detonation chamber capability within [Assignment: organization-defined information system, system component, or location].',
	},
	'SC-100': {
		family: 'SC',
		name: 'Source Authentication',
		description:
			'(A) The information system allows a message recipient to verify the claimed source identifier in a message.',
	},
	'SC-100 (1)': {
		family: 'SC',
		name: 'Source Authentication',
		description:
			'Authentication of the claimed identifier in the message is cryptographically based.',
	},
	'SC-100 (2)': {
		family: 'SC',
		name: 'Source Authentication',
		description:
			'The organization employs CMVP-certified cryptography for digital signature generation and verification. Refer to control SC-13.',
	},
	'SC-100 (3)': {
		family: 'SC',
		name: 'Source Authentication',
		description:
			'The organization employs CSE-approved cryptography and protocols to implement the authentication. Refer to control SC-13.',
	},
	'SC-101': {
		family: 'SC',
		name: 'Unclassified Telecommunications Systems In Secure Facilities',
		description:
			'(A) Unclassified telecommunications systems in Secure Facilities must not pass/transmit sensitive audio discussions when they are idle and not in use. Additionally, these telecommunications systems must be configured to prevent external control or activation. The concepts of "on-hook" audio protection outlined in Committee on National Security Systems publication CNSSI 5002 and CNSSI 5006 (Committee on National Security Systems Instructions) must be incorporated into Secure Facilities telecommunications systems.\n(B) Unclassified telephone systems and services must be configured to prevent technical exploitation or penetration. In addition, these systems must incorporate physical and software access controls to prevent disclosure or manipulation of system programming and stored data.\n(C) The organization must ensure that the following specific requirements are applied to unclassified telecommunications systems:\n(a) Provide on-hook audio protection by the use of CNSSI 5006 equipment, CNSSI 5006 approved disconnect devices, or equivalent CNSSI 5002 system configuration.\n(b) Provide isolation by use of a computerized telephone system (CTS) with software and hardware configuration control and control of audit reports (such as station message detail reporting, call detail reporting, etc.). System programming will not include the ability to place, or keep, a handset off-hook. Configuration of the system must ensure that all on-hook and off-hook vulnerabilities are identified and mitigated.\n(c) Ensure that equipment used for administration of telephone systems is installed inside an area where access is limited to authorized personnel. When local administration terminals (for a CTS) are not or cannot be contained within the controlled area, and safeguarded against unauthorized manipulation, then the use of CNSSI 5006 approved telephone equipment must be required, regardless of the CTS configuration.\n(d) Ensure that remote maintenance, outside the Secure Facility, is not used.\n(e) Ensure that speakerphones and audio conferencing systems are not used on unclassified telecommunications systems in Secure Facilities. Exceptions to this requirement may be approved by CSE, when these systems have sufficient audio isolation from other classified discussion areas in the Secure Facility, and procedures are established to prevent inadvertent transmission of classified information.\n(f) Ensure that features used for voice mail or unified messaging services, are configured to prevent unauthorized access to remote diagnostic ports or internal dial tone.\n(g) Ensure that telephone answering devices (TAD) and facsimile machines do not contain features that introduce security vulnerabilities, e.g., remote room monitoring, remote programming, or other similar features that may permit off-premise access to room audio. Prior CSE approval is required before installation or use.\n(D) All unclassified telecommunications systems and associated infrastructure must be electrically and physically isolated from any classified information/telecommunications systems in accordance with Committee on National Security Systems requirements or any other separation standards applied to the classified information system on site.\n(E) The security requirements and installation guidelines contained in the Committee on National Security Systems publication CNSSI 5000 shall be followed for Voice over Internet Protocol (VoIP) systems installed in any physical security zone processing classified information.',
	},
	'SI-1': {
		family: 'SI',
		name: 'System And Information Integrity Policy And Procedures',
		description:
			'(A) The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:\n(a) A system and information integrity policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and\n(b) Procedures to facilitate the implementation of the system and information integrity policy and associated system and information integrity controls.\n(B) The organization reviews and updates the current:\n(a) System and information integrity policy [Assignment: organization-defined frequency]; and\n(b)  System and information integrity procedures [Assignment: organization-defined frequency].',
	},
	'SI-2': {
		family: 'SI',
		name: 'Flaw Remediation',
		description:
			'(A) The organization identifies, reports, and corrects information system flaws.\n(B) The organization tests software and firmware updates related to flaw remediation for effectiveness and potential side effects before installation.\n(C) The organization installs security-relevant software and firmware updates within [Assignment: organization-defined time period] of the release of the updates.\n(D) The organization incorporates flaw remediation into the organizational configuration management process.',
	},
	'SI-2 (1)': {
		family: 'SI',
		name: 'Flaw Remediation',
		description:
			'FLAW REMEDIATION | CENTRAL MANAGEMENT\nThe organization centrally manages the flaw remediation process.',
	},
	'SI-2 (2)': {
		family: 'SI',
		name: 'Flaw Remediation',
		description:
			'FLAW REMEDIATION | AUTOMATED FLAW REMEDIATION STATUS\nThe organization employs automated mechanisms [Assignment: organization-defined frequency] to determine the state of information system components with regard to flaw remediation.',
	},
	'SI-2 (3)': {
		family: 'SI',
		name: 'Flaw Remediation',
		description:
			'FLAW REMEDIATION | TIME TO REMEDIATE FLAWS / BENCHMARKS FOR CORRECTIVE ACTIONS\n(a) The organization measures the time between flaw identification and flaw remediation; and\n(b) The organization establishes [Assignment: organization-defined benchmarks] for taking corrective actions.',
	},
	'SI-2 (4)': {
		family: 'SI',
		name: 'Flaw Remediation',
		description: 'FLAW REMEDIATION | AUTOMATED PATCH MANAGEMENT TOOLS',
	},
	'SI-2 (5)': {
		family: 'SI',
		name: 'Flaw Remediation',
		description:
			'FLAW REMEDIATION | AUTOMATIC SOFTWARE / FIRMWARE UPDATES\nThe organization installs [Assignment: organization-defined security-relevant software and firmware updates] automatically to [Assignment: organization-defined information system components].',
	},
	'SI-2 (6)': {
		family: 'SI',
		name: 'Flaw Remediation',
		description:
			'FLAW REMEDIATION | REMOVAL OF PREVIOUS VERSIONS OF SOFTWARE / FIRMWARE\nThe organization removes [Assignment: organization-defined software and firmware components] after updated versions have been installed.',
	},
	'SI-3': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description:
			'(A) The organization employs malicious code protection mechanisms at information system entry and exit points to detect and eradicate malicious code.\n(B) The organization updates malicious code protection mechanisms whenever new releases are available in accordance with organizational configuration management policy and procedures.\n(C) The organization configures malicious code protection mechanisms to:\n(a) Perform periodic scans of the information system [Assignment: organization-defined frequency] and real-time scans of files from external sources at [Selection (one or more); endpoint; network entry/exit points] as the files are downloaded, opened, or executed in accordance with organizational security policy; and\n(b) [Selection (one or more): block malicious code; quarantine malicious code; send alert to administrator; [Assignment: organization-defined action]] in response to malicious code detection.\n(D) The organization addresses the receipt of false positives during malicious code detection and eradication and the resulting potential impact on the availability of the information system.',
	},
	'SI-3 (1)': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description:
			'MALICIOUS CODE PROTECTION | CENTRAL MANAGEMENT\nThe organization centrally manages malicious code protection mechanisms.',
	},
	'SI-3 (2)': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description:
			'MALICIOUS CODE PROTECTION | AUTOMATIC UPDATES\nThe information system automatically updates malicious code protection mechanisms.',
	},
	'SI-3 (3)': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description: 'MALICIOUS CODE PROTECTION | NON-PRIVILEGED USERS',
	},
	'SI-3 (4)': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description:
			'MALICIOUS CODE PROTECTION | UPDATES ONLY BY PRIVILEGED USERS\nThe information system updates malicious code protection mechanisms only when directed by a privileged user.',
	},
	'SI-3 (5)': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description: 'MALICIOUS CODE PROTECTION | PORTABLE STORAGE DEVICES',
	},
	'SI-3 (6)': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description:
			'MALICIOUS CODE PROTECTION | TESTING / VERIFICATION\n(a) The organization tests malicious code protection mechanisms [Assignment: organization-defined frequency] by introducing a known benign, non-spreading test case into the information system; and\n(b) The organization verifies that both detection of the test case and associated incident reporting occur.',
	},
	'SI-3 (7)': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description:
			'MALICIOUS CODE PROTECTION | NONSIGNATURE-BASED DETECTION\nThe information system implements non-signature-based malicious code detection mechanisms.',
	},
	'SI-3 (8)': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description:
			'MALICIOUS CODE PROTECTION | DETECT UNAUTHORIZED COMMANDS\nThe information system detects [Assignment: organization-defined unauthorized operating system commands] through the kernel application programming interface at [Assignment: organization-defined information system hardware components] and [Selection (one or more): issues a warning; audits the command execution; prevents the execution of the command].',
	},
	'SI-3 (9)': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description:
			'MALICIOUS CODE PROTECTION | AUTHENTICATE REMOTE COMMANDS\nThe information system implements [Assignment: organization-defined security safeguards] to authenticate [Assignment: organization-defined remote commands].',
	},
	'SI-3 (10)': {
		family: 'SI',
		name: 'Malicious Code Protection',
		description:
			'MALICIOUS CODE PROTECTION | MALICIOUS CODE ANALYSIS\n(a) The organization employs [Assignment: organization-defined tools and techniques] to analyze the characteristics and behaviour of malicious code; and\n(b) The organization incorporates the results from malicious code analysis into organizational incident response and flaw remediation processes.',
	},
	'SI-4': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'(A) The organization monitors the information system to detect:\n(a) Attacks and indicators of potential attacks in accordance with [Assignment: organization-defined monitoring objectives]; and\n(b) Unauthorized local, network, and remote connections;\n(B) The organization identifies unauthorized use of the information system through [Assignment: organization-defined techniques and methods].\n(C) The organization deploys monitoring devices: (i) strategically within the information system to collect organization-determined essential information; and (ii) at ad hoc locations within the system to track specific types of transactions of interest to the organization.\n(D) The organization protects information obtained from intrusion-monitoring tools from unauthorized access, modification, and deletion.\n(E) The organization heightens the level of information system monitoring activity whenever there is an indication of increased risk to organizational operations and assets, individuals, other organizations, or Canada based on law enforcement information, intelligence information, or other credible sources of information.\n(F) The organization obtains legal opinion with regard to information system monitoring activities in accordance with GC legislation and TBS policies, directives and standards.\n(G) The organization provides [Assignment: organization-defined information system monitoring information] to [Assignment: organization-defined personnel or roles] [Selection (one or more): as needed; [Assignment: organization-defined frequency]].',
	},
	'SI-4 (1)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | SYSTEM-WIDE INTRUSION DETECTION SYSTEM\nThe organization connects and configures individual intrusion detection tools into an information system-wide intrusion detection system.',
	},
	'SI-4 (2)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | AUTOMATED TOOLS FOR REAL-TIME ANALYSIS\nThe organization employs automated tools to support near real-time analysis of events.',
	},
	'SI-4 (3)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | AUTOMATED TOOL INTEGRATION\nThe organization employs automated tools to integrate intrusion detection tools into access control and flow control mechanisms for rapid response to attacks by enabling reconfiguration of these mechanisms in support of attack isolation and elimination.',
	},
	'SI-4 (4)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | INBOUND AND OUTBOUND COMMUNICATIONS TRAFFIC\nThe information system monitors inbound and outbound communications traffic [Assignment: organization-defined frequency] for unusual or unauthorized activities or conditions.',
	},
	'SI-4 (5)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | SYSTEM-GENERATED ALERTS\nThe information system alerts [Assignment: organization-defined personnel or roles] when the following indications of compromise or potential compromise occur: [Assignment: organization-defined compromise indicators].',
	},
	'SI-4 (6)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | RESTRICT NON-PRIVILEGED USERS',
	},
	'SI-4 (7)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | AUTOMATED RESPONSE TO SUSPICIOUS EVENTS\nThe information system notifies [Assignment: organization-defined incident response personnel (identified by name and/or by role)] of detected suspicious events and takes [Assignment: organization-defined least-disruptive actions to terminate suspicious events].',
	},
	'SI-4 (8)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | PROTECTION OF MONITORING INFORMATION',
	},
	'SI-4 (9)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | TESTING OF MONITORING TOOLS\nThe organization tests intrusion-monitoring tools [Assignment: organization-defined frequency].',
	},
	'SI-4 (10)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | VISIBILITY OF ENCRYPTED COMMUNICATIONS\nThe organization makes provisions so that [Assignment: organization-defined encrypted communications traffic] is visible to [Assignment: organization-defined information system monitoring tools].',
	},
	'SI-4 (11)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | ANALYZE COMMUNICATIONS TRAFFIC ANOMALIES\nThe organization analyzes outbound communications traffic at the external boundary of the information system and selected [Assignment: organization-defined interior points within the system (e.g., sub-networks, subsystems)] to discover anomalies.',
	},
	'SI-4 (12)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | AUTOMATED ALERTS\nThe organization employs automated mechanisms to alert security personnel of the following inappropriate or unusual activities with security implications: [Assignment: organization-defined activities that trigger alerts].',
	},
	'SI-4 (13)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | ANALYZE TRAFFIC / EVENT PATTERNS\n(a) The organization analyzes communications traffic/event patterns for the information system;\n(b) The organization develops profiles representing common traffic patterns and/or events; and\n(c) The organization uses the traffic/event profiles in tuning system-monitoring devices to reduce the number of false positives and the number of false negatives.',
	},
	'SI-4 (14)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | WIRELESS INTRUSION DETECTION\nThe organization employs a wireless intrusion detection system to identify rogue wireless devices and to detect attack attempts and potential compromises/breaches to the information system.',
	},
	'SI-4 (15)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | WIRELESS TO WIRELINE COMMUNICATIONS\nThe organization employs an intrusion detection system to monitor wireless communications traffic as the traffic passes from wireless to wireline networks.',
	},
	'SI-4 (16)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | CORRELATE MONITORING INFORMATION\nThe organization correlates information from monitoring tools employed throughout the information system.',
	},
	'SI-4 (17)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | INTEGRATED SITUATIONAL AWARENESS\nThe organization correlates information from monitoring physical, cyber, and supply chain activities to achieve integrated, organization-wide situational awareness.',
	},
	'SI-4 (18)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | ANALYZE TRAFFIC / COVERT EXFILTRATION\nThe organization analyzes outbound communications traffic at the external boundary of the information system (i.e., system perimeter) and at [Assignment: organization-defined interior points within the system (e.g., subsystems, sub-networks)] to detect covert exfiltration of information.',
	},
	'SI-4 (19)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | INDIVIDUALS POSING GREATER RISK\nThe organization implements [Assignment: organization-defined additional monitoring] of individuals who have been identified by [Assignment: organization-defined sources] as posing an increased level of risk.',
	},
	'SI-4 (20)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | PRIVILEGED USER\nThe organization implements [Assignment: organization-defined additional monitoring] of privileged users.',
	},
	'SI-4 (21)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | PROBATIONARY PERIODS\nThe organization implements [Assignment: organization-defined additional monitoring] of individuals during [Assignment: organization-defined probationary period].',
	},
	'SI-4 (22)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | UNAUTHORIZED NETWORK SERVICES\nThe information system detects network services that have not been authorized or approved by [Assignment: organization-defined authorization or approval processes] and [Selection (one or more): audits; alerts [Assignment: organization-defined personnel or roles]].',
	},
	'SI-4 (23)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | HOST-BASED DEVICES\nThe organization implements [Assignment: organization-defined host-based monitoring mechanisms] at [Assignment: organization-defined information system components].',
	},
	'SI-4 (24)': {
		family: 'SI',
		name: 'Information System Monitoring',
		description:
			'INFORMATION SYSTEM MONITORING | INDICATORS OF COMPROMISE\nThe information system discovers, collects, distributes, and uses indicators of compromise.',
	},
	'SI-5': {
		family: 'SI',
		name: 'Security Alerts, Advisories, And Directives',
		description:
			'(A) The organization receives information system security alerts, advisories, and directives from [Assignment: organization-defined external organizations] on an ongoing basis.\n(B) The organization generates internal security alerts, advisories, and directives as deemed necessary.\n(C) The organization disseminates security alerts, advisories, and directives to: [Selection (one or more): [Assignment: organization-defined personnel or roles]; [Assignment: organization-defined elements within the organization]; [Assignment: organization-defined external organizations]].\n(D) The organization implements security directives in accordance with established time frames, or notifies the issuing organization of the degree of non-compliance.',
	},
	'SI-5 (1)': {
		family: 'SI',
		name: 'Security Alerts, Advisories, And Directives',
		description:
			'SECURITY ALERTS, ADVISORIES, AND DIRECTIVES | AUTOMATED ALERTS AND ADVISORIES\nThe organization employs automated mechanisms to make security alert and advisory information available throughout the organization.',
	},
	'SI-6': {
		family: 'SI',
		name: 'Security Functional Verification',
		description:
			'(A) The information system verifies the correct operation of [Assignment: organization-defined security functions].\n(B) The information system performs this verification [Selection (one or more): [Assignment: organization-defined system transitional states]; upon command by user with appropriate privilege; [Assignment: organization-defined frequency]].\n(C) The information system notifies [Assignment: organization-defined personnel or roles] of failed security verification tests.\n(D) The information system [Selection (one or more): shuts the information system down; restarts the information system; [Assignment: organization-defined alternative action(s)]] when anomalies are discovered.',
	},
	'SI-6 (1)': {
		family: 'SI',
		name: 'Security Functional Verification',
		description:
			'SECURITY FUNCTION VERIFICATION | NOTIFICATION OF FAILED SECURITY TESTS',
	},
	'SI-6 (2)': {
		family: 'SI',
		name: 'Security Functional Verification',
		description:
			'SECURITY FUNCTION VERIFICATION | AUTOMATION SUPPORT FOR DISTRIBUTED TESTING\nThe information system implements automated mechanisms to support for the management of distributed security testing.',
	},
	'SI-6 (3)': {
		family: 'SI',
		name: 'Security Functional Verification',
		description:
			'SECURITY FUNCTION VERIFICATION | REPORT VERIFICATION RESULTS\nThe organization reports the results of security function verification to [Assignment: organization-defined personnel or roles].',
	},
	'SI-7': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'(A) The organization employs integrity verification tools to detect unauthorized changes to [Assignment: organization-defined software, firmware, and information].',
	},
	'SI-7 (1)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | INTEGRITY CHECKS\nThe information system performs an integrity check of [Assignment: organization-defined software, firmware, and information] [Selection (one or more): at start-up; at [Assignment: organization-defined transitional states or security-relevant events]; [Assignment: organization-defined frequency]].',
	},
	'SI-7 (2)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | AUTOMATED NOTIFICATIONS OF INTEGRITY VIOLATIONS\nThe organization employs automated tools that provide notification to [Assignment: organization-defined personnel or roles] upon discovering discrepancies during integrity verification.',
	},
	'SI-7 (3)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | CENTRALLY-MANAGED INTEGRITY TOOLS\nThe organization employs centrally managed integrity verification tools.',
	},
	'SI-7 (4)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | TAMPER-EVIDENT PACKAGING',
	},
	'SI-7 (5)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | AUTOMATED RESPONSE TO INTEGRITY VIOLATIONS\nThe information system automatically [Selection (one or more): shuts the information system down; restarts the information system; implements [Assignment: organization-defined security safeguards]] when integrity violations are discovered.',
	},
	'SI-7 (6)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | CRYPTOGRAPHIC PROTECTION\nThe information system implements cryptographic mechanisms to detect unauthorized changes to software, firmware, and information.',
	},
	'SI-7 (7)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | INTEGRATION OF DETECTION AND RESPONSE\nThe organization incorporates the detection of unauthorized [Assignment: organization-defined security-relevant changes to the information system] into the organizational incident response capability.',
	},
	'SI-7 (8)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | AUDITING CAPABILITY FOR SIGNIFICANT EVENTS\nThe information system, upon detection of a potential integrity violation, provides the capability to audit the event and initiates the following actions: [Selection (one or more): generates an audit record; alerts current user; alerts [Assignment: organization-defined personnel or roles]; [Assignment: organization-defined other actions]].',
	},
	'SI-7 (9)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | VERIFY BOOT PROCESS\nThe information system verifies the integrity of the boot process of [Assignment: organization-defined devices].',
	},
	'SI-7 (10)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | PROTECTION OF BOOT FIRMWARE\nThe information system implements [Assignment: organization-defined security safeguards] to protect the integrity of boot firmware in [Assignment: organization-defined devices].',
	},
	'SI-7 (11)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | CONFINED ENVIRONMENTS WITH LIMITED PRIVILEGES\nThe organization requires that [Assignment: organization-defined user-installed software] execute in a confined physical or virtual machine environment with limited privileges.',
	},
	'SI-7 (12)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | INTEGRITY VERIFICATION\nThe organization requires that the integrity of [Assignment: organization-defined user-installed software] be verified prior to execution.',
	},
	'SI-7 (13)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | CODE EXECUTION IN PROTECTED ENVIRONMENTS\nThe organization allows execution of binary or machine-executable code obtained from sources with limited or no warranty and without the provision of source code only in confined physical or virtual machine environments and with the explicit approval of [Assignment: organization-defined personnel or roles].',
	},
	'SI-7 (14)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | BINARY OR MACHINE EXECUTABLE CODE\n(a) The organization prohibits the use of binary or machine-executable code from sources with limited or no warranty and without the provision of source code; and\n(b) The organization provides exceptions to the source code requirement only for compelling mission/operational requirements and with the approval of the authorizing official.',
	},
	'SI-7 (15)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | CODE AUTHENTICATION\nThe information system implements cryptographic mechanisms to authenticate [Assignment: organization-defined software or firmware components] prior to installation.',
	},
	'SI-7 (16)': {
		family: 'SI',
		name: 'Software, Firmware, And Information Integrity',
		description:
			'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY | TIME LIMIT ON PROCESS EXECUTION W/O SUPERVISION\nThe organization does not allow processes to execute without supervision for more than [Assignment: organization-defined time period].',
	},
	'SI-8': {
		family: 'SI',
		name: 'Spam Protection',
		description:
			'(A) The organization employs spam protection mechanisms at information system entry and exit points to detect and take action on unsolicited messages.\n(B) The organization updates spam protection mechanisms when new releases are available in accordance with organizational configuration management policy and procedures.',
	},
	'SI-8 (1)': {
		family: 'SI',
		name: 'Spam Protection',
		description:
			'SPAM PROTECTION | CENTRAL MANAGEMENT\nThe organization centrally manages spam protection mechanisms.',
	},
	'SI-8 (2)': {
		family: 'SI',
		name: 'Spam Protection',
		description:
			'SPAM PROTECTION | AUTOMATIC UPDATES\nThe information system automatically updates spam protection mechanisms.',
	},
	'SI-8 (3)': {
		family: 'SI',
		name: 'Spam Protection',
		description:
			'SPAM PROTECTION | CONTINUOUS LEARNING CAPABILITY\nThe information system implements spam protection mechanisms with a learning capability to more effectively identify legitimate communications traffic.',
	},
	'SI-9': {
		family: 'SI',
		name: 'Information Input Restrictions',
		description: '',
	},
	'SI-10': {
		family: 'SI',
		name: 'Information Input Validation',
		description:
			'(A) The information system checks the validity of [Assignment: organization-defined information inputs].',
	},
	'SI-10 (1)': {
		family: 'SI',
		name: 'Information Input Validation',
		description:
			'INFORMATION INPUT VALIDATION | MANUAL OVERRIDE CAPABILITY\n(a) The information system provides a manual override capability for input validation of [Assignment: organization-defined inputs];\n(b) The information system restricts the use of the manual override capability to only [Assignment: organization-defined authorized individuals]; and\n(c) The information system audits the use of the manual override capability.',
	},
	'SI-10 (2)': {
		family: 'SI',
		name: 'Information Input Validation',
		description:
			'INFORMATION INPUT VALIDATION | REVIEW / RESOLUTION OF ERRORS\nThe organization ensures that input validation errors are reviewed and resolved within [Assignment: organization-defined time period].',
	},
	'SI-10 (3)': {
		family: 'SI',
		name: 'Information Input Validation',
		description:
			'INFORMATION INPUT VALIDATION | PREDICTABLE BEHAVIOUR\nThe information system behaves in a predictable and documented manner that reflects organizational and system objectives when invalid inputs are received.',
	},
	'SI-10 (4)': {
		family: 'SI',
		name: 'Information Input Validation',
		description:
			'INFORMATION INPUT VALIDATION | REVIEW / TIMING INTERACTIONS\nThe organization accounts for timing interactions among information system components in determining appropriate responses for invalid inputs.',
	},
	'SI-10 (5)': {
		family: 'SI',
		name: 'Information Input Validation',
		description:
			'INFORMATION INPUT VALIDATION | RESTRICT INPUTS TO TRUSTED SOURCES AND APPROVED FORMATS\nThe organization restricts the use of information inputs to [Assignment: organization-defined trusted sources] and/or [Assignment: organization-defined formats].',
	},
	'SI-11': {
		family: 'SI',
		name: 'Error Handling',
		description:
			'(A) The information system generates error messages that provide information necessary for corrective actions without revealing information that could be exploited by adversaries.\n(B) The information system reveals error messages only to [Assignment: organization-defined personnel or roles].',
	},
	'SI-12': {
		family: 'SI',
		name: 'Information Output Handling And Retention',
		description:
			'(A) The organization handles and retains information within the information system and information output from the system in accordance with applicable GC legislation and TBS policies, directives and standards.',
	},
	'SI-13': {
		family: 'SI',
		name: 'Predictable Failure Prevention',
		description:
			'(A) The organization determines mean time to failure (MTTF) for [Assignment: organization-defined information system components] in specific environments of operation.\n(B) The organization provides substitute information system components and a means to exchange active and standby components at [Assignment: organization-defined MTTF substitution criteria].',
	},
	'SI-13 (1)': {
		family: 'SI',
		name: 'Predictable Failure Prevention',
		description:
			'PREDICTABLE FAILURE PREVENTION | TRANSFERRING COMPONENT RESPONSIBILITIES\nThe organization takes information system components out of service by transferring component responsibilities to substitute components no later than [Assignment: organization-defined fraction or percentage] of mean time to failure.',
	},
	'SI-13 (2)': {
		family: 'SI',
		name: 'Predictable Failure Prevention',
		description:
			'PREDICTABLE FAILURE PREVENTION | TIME LIMIT ON PROCESS EXECUTION WITHOUT SUPERVISION',
	},
	'SI-13 (3)': {
		family: 'SI',
		name: 'Predictable Failure Prevention',
		description:
			'PREDICTABLE FAILURE PREVENTION | MANUAL TRANSFER BETWEEN COMPONENTS\nThe organization manually initiates transfers between active and standby information system components [Assignment: organization-defined frequency] if the mean time to failure exceeds [Assignment: organization-defined time period].',
	},
	'SI-13 (4)': {
		family: 'SI',
		name: 'Predictable Failure Prevention',
		description:
			'PREDICTABLE FAILURE PREVENTION | STANDBY COMPONENT INSTALLATION / NOTIFICATION\n(a) The organization, if information system component failures are detected ensures that the standby components are successfully and transparently installed within [Assignment: organization-defined time period]; and\n(b) The organization, if information system component failures are detected [Selection (one or more): activates [Assignment: organization-defined alarm]; automatically shuts down the information system].',
	},
	'SI-13 (5)': {
		family: 'SI',
		name: 'Predictable Failure Prevention',
		description:
			'PREDICTABLE FAILURE PREVENTION | FAILOVER CAPABILITY\nThe organization provides [Selection: real-time; near real-time] [Assignment: organization-defined failover capability] for the information system.',
	},
	'SI-14': {
		family: 'SI',
		name: 'Non-Persistence',
		description:
			'(A) The organization implements non-persistent [Assignment: organization-defined information system components and services] that are initiated in a known state and terminated [Selection (one or more): upon end of session of use; periodically at [Assignment: organization-defined frequency]].',
	},
	'SI-14 (1)': {
		family: 'SI',
		name: 'Non-Persistence',
		description:
			'NON-PERSISTENCE | REFRESH FROM TRUSTED SOURCES\nThe organization ensures that software and data employed during information system component and service refreshes are obtained from [Assignment: organization-defined trusted sources].',
	},
	'SI-15': {
		family: 'SI',
		name: 'Information Output Filtering',
		description:
			'(A) The information system validates information output from [Assignment: organization-defined software programs and/or applications] to ensure that the information is consistent with the expected content.',
	},
	'SI-16': {
		family: 'SI',
		name: 'Memory Protection',
		description:
			'(A) The information system implements [Assignment: organization-defined security safeguards] to protect its memory from unauthorized code execution.',
	},
	'SI-17': {
		family: 'SI',
		name: 'Fail-Safe Procedures',
		description:
			'(A) The information system implements [Assignment: organization-defined fail-safe procedures] when [Assignment: organization-defined failure conditions occur].',
	},
}
