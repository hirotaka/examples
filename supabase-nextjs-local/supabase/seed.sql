--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1 (Debian 14.1-1.pgdg110+1)
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO auth.users VALUES ('00000000-0000-0000-0000-000000000000', 'c881aa73-30be-495f-8e03-53df891c8569', '', 'authenticated', 'fuga@hoge.com', '$2a$10$i9c8SYWZzSqFAZTmLCywm.44yq9Kyb27r0192GE7LU2rmWgMUO.na', '2022-03-10 03:04:24.48735+00', NULL, '', '2022-03-10 03:04:13.284463+00', '', '2022-03-10 03:26:34.868467+00', '', '', NULL, '2022-03-10 03:26:46.241308+00', '{"provider": "email", "providers": ["email"]}', '{}', false, '2022-03-10 03:04:13.273477+00', '2022-03-10 03:04:13.273483+00', NULL, NULL, '', '', NULL, DEFAULT, '', 0, NULL);


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.profiles VALUES ('c881aa73-30be-495f-8e03-53df891c8569', '2022-03-10 05:43:08.138+00', 'hirotaka');


--
-- PostgreSQL database dump complete
--
